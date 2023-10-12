import {JSX, ParentComponent, ParentProps} from "solid-js";
import "./index.scss"

interface HButton {
    children: string;
    size: "lg" | "md";
    type: "primary" | "normal" | "danger";
}

type HButtonProps = ParentProps<
    Partial<HButton & JSX.HTMLAttributes<HTMLDivElement>>
>;

const HButton: ParentComponent<HButtonProps> = (props) => {
    const {children, size,type} = props;
    return (
        <div class="hancens-button"
             classList={{[`hancens-button--size-${size}`]: !!size,
                        [`hancens-button--type-${type}`]: !!type}}

             >{children}</div>
    )
}
export default HButton