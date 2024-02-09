import Image from "next/image";
import { FC } from "react";

interface Props {
    imageURL: string
}

export const StyledImage: FC<Props> = (props) => {
    return (
        <Image src={props.imageURL}
            alt=""
            layout='fill'
            objectFit='cover'
            style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        />
    )
}