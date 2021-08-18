import { css } from "linaria";
import tw from "twin.macro";

const Text = ({children}:any) => {
    return (
        <p
            className={css`
          ${tw`text-xl text-green-600`}
        `} >
            {children}
        </p>
    )
}

export default Text
