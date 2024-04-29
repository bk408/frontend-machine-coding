import { useState } from "react"
import { data } from "./Data,jsx"


const Transfer = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  const checkList = (list, id, checked) => {
    return list.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          checked: !checked,
        };
      }
      return item;
    });
  };

  // If user click on item then it will change the color
  const handleClick = (id, checked, direction) => {
    if (direction === "LEFT") {
      let copyList = [...leftItems]; // copy leftItems
      copyList = checkList(copyList, id, checked);
      setLeftItems(copyList);
    } else {
      let copyList = [...rightItems];
      copyList = checkList(copyList, id, checked);
      setRightItems(copyList);
    }
  };

  // it reset the checked color
  const resetItems = (list) => {
    return list.map((item) => {
      return {
        ...item,
        checked: false,
      };
    });
  };

  // transfer the data
  const handleTransferBtn = (dir) => {
    if (dir === "LEFT_TO_RIGHT") {
      // First we will check we have data in left side or not
      if (leftItems.length) {
        const copyList = [...leftItems];

        // now we create two check list
        // 1. for checked list => item are selected
        const checkList = copyList.filter((item) => item.checked);

        // 2. for unchecked list => item are not selected

        const unCheckList = copyList.filter((item) => !item.checked);

        // now we send selected items into right side and unselected items into left side

        setRightItems(resetItems([...rightItems, ...checkList]));

        setLeftItems(unCheckList);
      }
    } else {
      const copyList = [...rightItems];

      // now we create two check list
      // 1. for checked list => item are selected
      const checkList = copyList.filter((item) => item.checked);

      // 2. for unchecked list => item are not selected

      const unCheckList = copyList.filter((item) => !item.checked);

      // now we send selected items into right side and unselected items into left side

      setLeftItems(resetItems([...leftItems, ...checkList]));

      setRightItems(unCheckList);
    }
  };

  return (
    <div className="app">
      <h1>Transfer List</h1>
      <div className="container">
        {/* For left section */}
        <div className="box">
          {leftItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handleClick(id, checked, "LEFT")}
              className={`item  ${checked && "checked"}`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>

        {/* for middle buttons */}
        <div className="actions">
          <button onClick={() => handleTransferBtn("LEFT_TO_RIGHT")}>
            Left
          </button>
          <button onClick={() => handleTransferBtn("RIGHT_TO_LEFT")}>
            Right
          </button>
        </div>

        {/* For right section */}
        <div className="box">
          {rightItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handleClick(id, checked, "RIGHT")}
              className={`item  ${checked && "checked"}`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Transfer