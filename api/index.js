export default (req, res) => {
  res.json([
    {
      id: 0,
      title: "Cookie Consent Banner",
      description:
        "An alternative cookie consent banner as a native-browser module",
      link: "http://some-link-here.com"
    },
    {
      id: 1,
      title: "Some other ES module package",
      description: "Description here..",
      url: "http://some-link-here.com"
    }
  ]);
};
