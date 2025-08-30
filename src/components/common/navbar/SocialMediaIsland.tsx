import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import {InstagramIcon, LinkedInIcon, YoutubeIcon, TikTokIcon} from "@/components/common/icons";

type SocialMediaIslandProps = {
    className?: string;
}


export const SocialMediaIsland: React.FC<SocialMediaIslandProps> = ({className}) => {

    return (
        <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            initialOpacity={0.2}
            animateOpacity
            scale={1}
            delay={0.1}
        >
            <div className={"flex flex-row w-44 justify-center items-center gap-3"}>
                <InstagramIcon width={28} height={28}
                               className={"transform transition-transform duration-100 ease-in-out hover:scale-110 hover:cursor-pointer"}/>
                <LinkedInIcon width={28} height={28}
                              className={"transform transition-transform duration-100 ease-in-out hover:scale-110 hover:cursor-pointer"}/>
                <YoutubeIcon width={32} height={32}
                             className={"transform transition-transform duration-100 ease-in-out hover:scale-110 hover:cursor-pointer"}/>
                <TikTokIcon width={28} height={28}
                            className={"transform transition-transform duration-100 ease-in-out hover:scale-110 hover:cursor-pointer"}/>
            </div>
        </AnimatedContent>
    )
}