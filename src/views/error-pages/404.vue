<template>
  <div class="wrapper">
    <div class="not-found typed-out">404 Not Found</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  @include flexDirection(center);
  width: 100vw;
  height: 100vh;
  font-size: 70px;
  line-height: 1.3;
  color: #ffffff;
  background: #111112;
  .not-found {
    max-width: 550px;
    letter-spacing: 3px;
    word-break: break-all;
  }
}

// 打字机效果
.typed-out {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  width: 0;
  animation:
    typing 4s steps(20, end) forwards,
    blink 0.8s infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 550px;
  }
}

@keyframes blink {
  from {
    border-color: transparent;
  }
  to {
    border-color: #ffffff;
  }
}
</style>
