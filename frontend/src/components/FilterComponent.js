import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
//import { applyFilters } from "../redux/productListSlice";

const FilterComponent = () => {
  const dispatch = useDispatch();
  // const { filteredProducts } = useSelector((state) => state.productsList);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(Infinity);

  const handleFilterButtonClick = () => {
    console.log("filters clicked");
    console.log(priceMin, priceMax);
    // Dispatch the applyFilters action with the updated filter values
    //dispatch(applyFilters({ priceMin, priceMax }));
  };

  return (
    <Stack direction={["column", "row"]} spacing="10px">
      <FormControl>
        {/* <FormLabel>Minimum Price:</FormLabel> */}
        <Input
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(Number(e.target.value))}
        />
      </FormControl>
      <FormControl>
        {/* <FormLabel>Maximum Price:</FormLabel> */}
        <Input
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handleFilterButtonClick}>
        Apply
      </Button>
    </Stack>
  );
};

export default FilterComponent;
