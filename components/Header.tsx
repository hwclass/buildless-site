import Title from "./Title.tsx";

const Header = ({ title }: { title: string }) => {
  const blogIsActive = Deno.env.get('IS_BLOG_ACTIVE')
  return (
    <header>
      <Title content={title} />
      <ul class='menu'>
        {blogIsActive == "1" ? (
          <li class='header-title-small menuItem'>
            <a href="/blog" class="normalizedAhref">
              Blog
            </a>
          </li>
        ) : null}
        <li class='menuItem'>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
