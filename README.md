# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 🚀 How to Load This Extension in Your Browser

This guide explains how to install and test this extension locally without publishing it to the Chrome Web Store.

---

## 🔹 Chrome / Edge / Brave (Chromium-based browsers)

1. **Open Extensions page**  
    In the address bar, go to:  
   chrome://extensions/

2. **Enable Developer Mode**  
   Toggle the switch in the top-right corner.

3. **Load the extension**  
   Click **Load unpacked** and select this project’s folder (the one containing `manifest.json`).

4. **Verify installation**  
   The extension should now appear in your extensions list.  
   If the manifest defines a browser action, its icon will show up in the toolbar.

5. **Reload after changes**  
   If you edit any code, go back to the extensions page and click **Reload** under the extension.

---

## 🔹 Firefox

1. **Open Debugging page**  
    In the address bar, go to:
   about:debugging#/runtime/this-firefox

2. **Load the extension**  
   Click **Load Temporary Add-on** and select the `manifest.json` file in this project.

3. **Verify installation**  
   The extension will be active until the browser is closed.  
   For permanent use, it must be signed and packaged via Mozilla Add-ons.

---

## ✅ Notes

- You must have a valid `manifest.json` in the root of this project.
- Chrome extensions can be run unpacked indefinitely.
- Firefox only allows temporary loading unless published or signed.
