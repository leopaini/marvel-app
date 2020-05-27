export const decodeUrl = (params: string): void => {
  const comicsParams = decodeURIComponent(params).split("|");
  // TODO: Ver donde guardo las demás...

  const firstTitle = comicsParams[0];
  const title = firstTitle.slice(0, firstTitle.indexOf("("));
  const [year, issueNr] = firstTitle.slice(firstTitle.indexOf("(")).split(" ");

  console.log(title);
  console.log(year.replace("(", "").replace(")", ""));
  console.log(issueNr.replace("#", ""));
};
