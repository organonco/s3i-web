import Image from "next/image";
import { FC } from "react";

interface Props {
    imageURL: string
}

export const StyledImage: FC<Props> = (props) => {
    return (
        <Image src={props.imageURL}
            alt="لا يمكن تحميل الصورة"
            layout='fill'
            objectFit='contain'
        //  className="rounded-full" 
        />
    )
}