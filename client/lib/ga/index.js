export const pageview = (url) => {
  window.gtag("config", "process.env.UA-197011378-1", {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params)
}
