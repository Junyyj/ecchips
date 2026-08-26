# ECCHIPS V1.0 — 修复部署清单（#1 Canonical 域名问题）

日期：2026-08-26

## 背景

线上实测（2026-08-25）：

| URL | 状态 |
|---|---|
| `https://www.ecchips.com/` | ✅ 200 正常 |
| `http://www.ecchips.com/` | ✅ 301 → https://www |
| `https://ecchips.com/` | ❌ 连接超时 |
| `http://ecchips.com/` | ❌ Cloudflare 522 |

原代码所有 canonical / sitemap / robots 都指向**不可访问的 apex 域名**
`https://ecchips.com/...`，Google 抓取 canonical 目标会直接失败。

## 已完成的代码修复（本仓库）

统一以 **`https://www.ecchips.com` 为唯一规范域名**（当前已验证可访问）：

- `astro.config.mjs` — site 改为 www
- `src/layouts/BaseLayout.astro` — SITE 常量改为 www
- `src/pages/index.astro`、`smd-code-lookup.astro` — JSON-LD URL 改为 www
- `src/pages/about.astro`、`privacy.astro` — 重写内容 + JSON-LD 改为 www
- `public/sitemap.xml` — 全部 `<loc>` 改为 www，补充 `<lastmod>`
- `public/robots.txt` — Sitemap 指向 www
- `public/_redirects` — 重定向方向反转为 `ecchips.com/* → https://www.ecchips.com/:splat 301`

## ⚠️ 还需在 Cloudflare 控制台完成（代码无法替代）

`_redirects` 只在请求到达 Pages 源站后才生效。目前 apex 请求根本到不了源站
（522 = Cloudflare 连不上该主机名的源）。以下两步**任选其一**：

### 方案 A（推荐）：Cloudflare 边缘重定向规则

Dashboard → 选择 `ecchips.com` 域 → Rules → Redirect Rules → Create：

- If: Hostname equals `ecchips.com`
- Then: Dynamic redirect → `concat("https://www.ecchips.com", http.request.uri.path)`
- Status code: **301**
- 勾选 Preserve query string

优点：不依赖 Pages 自定义域绑定，立即生效，apex 的 522 直接消失。

### 方案 B：把 apex 绑定到 Pages 项目

Dashboard → Workers & Pages → ecchips 项目 → Custom domains → 添加
`ecchips.com`，并把 `www.ecchips.com` 设为 primary。
Pages 会自动处理 apex→primary 跳转（此时 `_redirects` 作为兜底仍保留）。

## 部署后验证（必须逐条执行）

> 注：Cloudflare Pages 会把无尾斜杠 URL 以 308 规范化为带斜杠形式
> （如 `/about` → `/about/`）。全站 canonical / sitemap / 内部链接已统一
> 采用带斜杠形态，与实际服务地址一致。

```bash
curl -sI https://www.ecchips.com/ | head -3                  # 期望 200
curl -sI https://www.ecchips.com/about | head -2             # 期望 308 → location: /about/
curl -sL -o /dev/null -w '%{http_code}\n' https://www.ecchips.com/about/   # 期望 200
curl -sI https://ecchips.com/ | head -2                      # 控制台步骤完成后期望 301 → https://www.ecchips.com/
curl -s http://ecchips.com/about/ -o /dev/null -w '%{http_code} %{redirect_url}\n'  # 期望经 www 301 到位
curl -s https://www.ecchips.com/smd-code-lookup/ | grep -o 'canonical" href="[^"]*"'
# 期望 <link rel="canonical" href="https://www.ecchips.com/smd-code-lookup/"/>
```

## Search Console

1. 验证 `https://www.ecchips.com` 这个 property（Domain property 最省事）。
2. 提交 sitemap：`https://www.ecchips.com/sitemap.xml`。
3. 用 URL Inspection 对 `/smd-code-lookup/` 请求编入索引。

## 备注：以后想换回 apex 作规范域名？

新站尚无 SEO 积累，随时可切换。步骤：
1. 本仓库全局把 `www.ecchips.com` 换回 `ecchips.com`（6 处文件）；
2. `_redirects` 方向反转回 www→apex；
3. 确保 apex 在 Cloudflare 可正常服务后再上线，不要在 apex 故障期间切回去。
