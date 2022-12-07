import { asset } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

const NotificationBar = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div class="notification-top-bar">
      <p>
        <small>If you're a buildless enthusiast 🤗</small>
        <a onClick={() => {
          setShowDetails(!showDetails);
        }}>Give a hand 🤝</a>
        <p class={showDetails ? '' : 'hide'}>
          <a href="https://github.com/hwclass/buildless-site/issues/new?assignees=&labels=&template=bug_report.md&title=" target="_blank">drop a PR 💧</a>
          <a href="https://github.com/hwclass/buildless-site/issues/new?assignees=&labels=&template=send-a-blog-post.md&title=" target="_blank">send a blog post 📮</a>
          <a href="https://github.com/hwclass/awesome-buildless" target="_blank">add new link(s) 🔗</a>
          <a href="https://github.com/hwclass/buildless-site/issues/new?assignees=&labels=&template=feature_request.md&title=" target="_blank">share a suggestion 🎤</a>
          <a href="https://www.buymeacoffee.com/hwclass" target="_blank">buy me a coffee</a>
        </p>
      </p>  
    </div>
  )
}

export default NotificationBar;
