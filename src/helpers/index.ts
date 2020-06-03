import { ICharacter, IComic } from "../interfaces";

export const processComicsParams = (cParams: string) => {
  const params = decodeURIComponent(cParams).split("|");
  const firstTitle = params.shift()!;

  const title = firstTitle.slice(0, firstTitle.indexOf("(") - 1);
  let [year, issueNumber] = firstTitle.slice(firstTitle.indexOf("(")).split(" ");
  year = year.replace("(", "").replace(")", "");
  issueNumber = issueNumber.replace("#", "");

  return { title, year, issueNumber, filters: params };
};

export const getComicParams = (filter: string) => {
  const title = filter.slice(0, filter.indexOf("(") - 1);
  let [year, issueNumber] = filter.slice(filter.indexOf("(")).split(" ");
  year = year.replace("(", "").replace(")", "");
  issueNumber = issueNumber.replace("#", "");

  return { title, year, issueNumber };
};

export const hideScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const showScroll = (): void => {
  document.body.style.overflow = "unset";
};

export function isCharacter(item: ICharacter | IComic): item is ICharacter {
  return (item as ICharacter).name !== undefined;
}
