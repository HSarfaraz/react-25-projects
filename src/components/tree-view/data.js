const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Location",
        to: "/location",
      },
    ],
  },
  {
    label: "Setting",
    to: "/setting",
    children: [
      {
        label: "Account",
        to: "/account",
      },
      {
        label: "Security",
        to: "/security",
        children: [
          {
            label: "Login",
            to: "/login",
          },
          {
            label: "Register",
            to: "/register",
            children: [
              {
                label: "random data",
                to: "/random1",
              },
              {
                label: "random data",
                to: "/random2",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
