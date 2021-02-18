import { MenuOption } from "../../components/UI/NavBar/navBar.interface";

const options: MenuOption[] = [
  {
    name: "Home",
    toUrl: "/",
  },
  {
    name: "Component",
    options: [
      {
        name: "Box",
        toUrl: "/box",
        hasDivider: true,
      },
      {
        name: "Breadcrumb",
        toUrl: "/breadcrumb",
        hasDivider: true,
      },
      {
        name: "Buttons",
        toUrl: "/button",
        hasDivider: true,
      },

      {
        name: "Checkbox",
        toUrl: "/checkbox",
        hasDivider: true,
      },
      {
        name: "Content",
        toUrl: "/content",
        hasDivider: true,
      },
      {
        name: "File upload",
        toUrl: "/upload",
        hasDivider: true,
      },
      {
        name: "Image container",
        toUrl: "/image-container",
        hasDivider: true,
      },
      {
        name: "Inputs",
        toUrl: "/input",
        hasDivider: true,
      },
      {
        name: "Notification",
        toUrl: "/notification",
        hasDivider: true,
      },
      {
        name: "Progress Bar",
        toUrl: "/progress-bar",
        hasDivider: true,
      },
      {
        name: "Radio",
        toUrl: "/radio",
        hasDivider: true,
      },
      {
        name: "Select",
        toUrl: "/select",
        hasDivider: true,
      },
      {
        name: "Tag",
        toUrl: "/tag",
        hasDivider: true,
      },
      {
        name: "TextArea",
        toUrl: "/textarea",
      },
    ],
  },
];

export default options;
