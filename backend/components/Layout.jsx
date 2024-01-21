const React = require("react");
const Navbar = require("./Navbar");

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <script defer src="/scripts/reg-form.js"></script>
        <script defer src="/scripts/login-form.js"></script>
        <script defer src="/scripts/add-animal.js"></script>
        <script defer src="/scripts/delete-animal.js"></script>
        <script defer src="/scripts/update-animal.js"></script>
        <title>{title}</title>
      </head>
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
};
