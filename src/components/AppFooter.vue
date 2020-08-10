<template>
  <div class="footer-wrapper">
    <div class="container container-wide section-gap">
      <footer class="footer">
        <div class="text">
          Developed by
          <a href="http://linkedin.com/in/dogukanbatal">Doğukan Batal</a>
        </div>
        <div class="text text-icon">
          <a href="https://github.com/dogukanbatal/covid19-tracker/"
            ><GithubIcon size="1.2x" class="icon" />Github Repository</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { GithubIcon } from "vue-feather-icons";
export default {
  name: "AppFooter",
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
  &-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @media (--m) {
    flex-direction: column-reverse;
    justify-content: center;
    height: auto;
    padding: 10px;
    border-radius: 0;
    .text-icon {
      margin-bottom: 5px;
    }
  }
  .text {
    color: rgb(var(--gray-1));
    font-weight: 500;
    font-size: 13px;
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
