var filteredData = [];

function setFilteredData(data) {
  filteredData = data;
}

const applyFilters = (Data, filters) => {
  if (
    filters.location === "" &&
    filters.propertyType === "" &&
    filters.price === "" &&
    filters.area === 0
  ) {
    setFilteredData(Data);
  } else if (
    filters.location !== "" &&
    filters.propertyType !== "" &&
    filters.price !== "" &&
    filters.area !== 0
  ) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          item.propertyType === filters.propertyType &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (
    filters.location !== "" &&
    filters.propertyType !== "" &&
    filters.price !== ""
  ) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          item.propertyType === filters.propertyType &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price
        );
      })
    );
  } else if (
    filters.location !== "" &&
    filters.propertyType !== "" &&
    filters.area !== 0
  ) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          item.propertyType === filters.propertyType &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (
    filters.location !== "" &&
    filters.price !== "" &&
    filters.area !== 0
  ) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (
    filters.propertyType !== "" &&
    filters.price !== "" &&
    filters.area !== 0
  ) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.propertyType === filters.propertyType &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (filters.location !== "" && filters.propertyType !== "") {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          item.propertyType === filters.propertyType
        );
      })
    );
  } else if (filters.location !== "" && filters.price !== "") {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price
        );
      })
    );
  } else if (filters.propertyType !== "" && filters.price !== "") {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.propertyType === filters.propertyType &&
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price
        );
      })
    );
  } else if (filters.location !== "" && filters.area !== 0) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.location === filters.location &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (filters.propertyType !== "" && filters.area !== 0) {
    setFilteredData(
      Data.filter((item) => {
        return (
          item.propertyType === filters.propertyType &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (filters.price !== "" && filters.area !== 0) {
    setFilteredData(
      Data.filter((item) => {
        return (
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price &&
          item.area[0] * item.area[1] >= filters.area
        );
      })
    );
  } else if (filters.location !== "") {
    setFilteredData(
      Data.filter((item) => {
        return item.location === filters.location;
      })
    );
  } else if (filters.propertyType !== "") {
    setFilteredData(
      Data.filter((item) => {
        return item.propertyType === filters.propertyType;
      })
    );
  } else if (filters.price !== "") {
    setFilteredData(
      Data.filter((item) => {
        return (
          parseInt(filters.price.split(",")[0]) <= item.price &&
          parseInt(filters.price.split(",")[1]) >= item.price
        );
      })
    );
  } else if (filters.area !== 0) {
    setFilteredData(
      Data.filter((item) => {
        return item.area[0] * item.area[1] >= filters.area;
      })
    );
  }
  return filteredData;
};

export default applyFilters;
