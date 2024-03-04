// import "./DropDownMenu.scss"

interface ChildProps {
  sendDataToParent: (data: string) => void;
}

export const DropDownOption = ({ sendDataToParent }: ChildProps): JSX.Element => {
  return (
    <div className="DropDownMenu">
        <ul>
            <button onClick={()=>{sendDataToParent("other")}}>All Pins</button>
            <button onClick={()=>{sendDataToParent("saved")}}>Your Pins</button>
        </ul>
    </div>
  )
}