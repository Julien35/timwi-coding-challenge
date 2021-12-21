import { Item } from "@/models/Item";

class TextFilters {
  public autocomplete(str: string, arr: Item[], ignoreHyphen: boolean): Item[] {
    str = str.trimStart();
    if (str.length === 0) {
      return [];
    }
    return arr
      .filter((item: Item) => {
        return this.searchFilter(this.displayValue(item), str, ignoreHyphen);
      })
      .sort(this.compareValue);
  }

  public searchFilter(
    itemValue: string,
    queryText: string,
    ignoreHyphen: boolean
  ): boolean {
    queryText = queryText.trimStart();

    if (queryText.length < 3 || !itemValue) {
      return false;
    }

    const formatItemValue: string = this.formatValue(itemValue, ignoreHyphen);
    const formatQueryText: string = this.formatValue(queryText, ignoreHyphen);
    const position: number = formatItemValue.indexOf(formatQueryText);
    // pour gérer les cas où le mot cherché n'est pas en premier
    return (
      position !== -1 &&
      (position === 0 || formatItemValue.charAt(position - 1) === " ")
    );
  }

  private formatValue(value: string, ignoreHyphen: boolean): string {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/-/g, (match) => {
        if (ignoreHyphen) {
          return " ";
        } else {
          return match;
        }
      });
  }

  public compareValue(a: Item, b: Item) {
    const textfilter: TextFilters = new TextFilters();
    const itemA = textfilter.displayValue(a).toUpperCase();
    const itemB = textfilter.displayValue(b).toUpperCase();
    return itemA.localeCompare(itemB, "fr-FR");
  }

  public displayValue(item: Item): string {
    return item.title;
  }
}

export default new TextFilters();
