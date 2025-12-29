import { onRequestOptions as __contact_js_onRequestOptions } from "/Volumes/AI/Code/xurmann-investments/functions/contact.js"
import { onRequestPost as __contact_js_onRequestPost } from "/Volumes/AI/Code/xurmann-investments/functions/contact.js"

export const routes = [
    {
      routePath: "/contact",
      mountPath: "/",
      method: "OPTIONS",
      middlewares: [],
      modules: [__contact_js_onRequestOptions],
    },
  {
      routePath: "/contact",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__contact_js_onRequestPost],
    },
  ]