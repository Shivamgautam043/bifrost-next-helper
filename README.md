# bifrost-next-helper 🔐

A reusable authentication helper for **Next.js (App Router)** projects.

This repository is designed to be used as a **Git submodule** and provides
plug-and-play **Login / Signup UI**, auth hooks, and utilities that can be
shared across multiple Next.js applications.

---

## ✨ Features

- ✅ Reusable Login & Signup pages
- 🔁 Callback URL based redirect after login
- 🧩 Designed for Git submodule usage
- 🌍 Environment-based configuration (no hardcoding)
- 🛠 Works with any backend auth API
- ⚡ App Router compatible (Next.js 13+)

---

## 📦 What this repo contains

This repo **does NOT create routes automatically**.

Instead, it exposes **page components** that the parent Next.js app
mounts under its own routes.

