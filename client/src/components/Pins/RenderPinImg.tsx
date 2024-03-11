import { FC, useContext, useEffect, useState } from "react";
import { getPinsByCategory2 } from "../../api/pins/pinsApi";
import { UserContext } from "../../contexts/userContext";
import { Pin } from "../../types/pin";
import "./RenderPinImg.scss";

//work ok
interface PinProp {
  category: string;
}

const RenderPinImg: FC<PinProp> = ({ category }) => {
  const [pinsState, setPins] = useState<Pin[]>([]);
  const [filterPinsState, setFilterPins] = useState<Pin[]>([]);
  const { user } = useContext(UserContext);

  const handleGetPinsByCategory = async () => {
    try {
      if (!category)
        throw new Error(
          "at handleGetPinsByCategory there is no category in params"
        );
      //use axios to get the Pin list by userId from DB
      const response = await getPinsByCategory2(category, user.username);
      if (!response)
        throw new Error(
          "No response from axios getPinsByCategory at render suggested pins"
        );

      //put the list in PinsState and filterPinsState
      setPins(response);
      setFilterPins(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      handleGetPinsByCategory();
    }
  }, [user]);

  return (
    <>
      <div className="renderImg">
        {filterPinsState && pinsState.length > 0 ? (
          filterPinsState.map((pin) => {
            return (
              <div>
                <img key={pin.title} src={pin.image} />
              </div>
              
            );
          })
        ) : (
          <p>no pin found</p>
        )}
      </div>
    </>
  );
};

export default RenderPinImg;
