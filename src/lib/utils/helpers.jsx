export const getPageCount = (count, limit) => {
    const pageCount = Math.ceil(count / limit);
    return pageCount;
  };