<template>
  <div class="container container-wide section-gap">
    <footer class="footer">
      <div class="text">Developer by <a href="">Doğukan Batal</a></div>
      <div class="text text-icon">
        <a href=""><GithubIcon size="1.2x" class="icon" />Github Repository</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { GithubIcon } from "vue-feather-icons";
export default {
  name: "AppChart",
  components: {
    GithubIcon
  }
};
</script>

<style scoped>
.footer {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  box-shadow: 0 -25px 35px rgba(0, 0, 0, 0.07);
  @media (--m) {
    flex-direction: column-reverse;
    justify-content: center;
    height: auto;
    padding: 15px 10px;
    .text-icon {
      margin-bottom: 5px;
    }
  }
  .text {
    color: rgb(var(--gray-1));
    font-weight: 500;
    a {
      &:hover {
        color: rgb(var(--gray-3));
      }
    }
    &-icon {
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
