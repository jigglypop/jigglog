import React, { useCallback } from "react";
import { FaPrint } from "react-icons/fa";
import { 
  Button, 
  PrintTitle,
} from './styled'

const PrintButton = () => {
    const printPage = useCallback(() => {
      global.print();
    }, []);
    return (
        <Button type="button" onClick={printPage}>
            <FaPrint />
            <PrintTitle>PRINT</PrintTitle>
        </Button>);
};
  
export default PrintButton;
  