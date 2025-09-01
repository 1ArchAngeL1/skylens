import {TypographyH1, TypographyH2} from "@/components/common/text/Typography";
import TextType from "@/blocks/TextAnimations/TextType/TextType";

type LandingHeroTextProps = {
    className?: string;
}

export const LandingHeroText: React.FC<LandingHeroTextProps> = ({className}) => {

    return <div>
        {/*<TypographyH2 className={"text-6xl"}>*/}
        {/*    Your Sky. Your Story.*/}
        {/*</TypographyH2>*/}
        <TypographyH1 className={"text-7xl text-start leading-none font-mono mb-4"}>
            Higher <br/> Perspective <br/> Awaits.
        </TypographyH1>
        {/*<TextType*/}
        {/*    text={["Master the Art of Aerial Photography",*/}
        {/*        "Unleash Boundless Creativity",*/}
        {/*        "Fly Smarter, Capture Better",*/}
        {/*        "Turn Every Flight into a Masterpiece"]}*/}
        {/*    typingSpeed={75}*/}
        {/*    pauseDuration={1500}*/}
        {/*    showCursor={true}*/}
        {/*    cursorCharacter="|"*/}
        {/*    textColors={["#39dc99", "#39dc99", "#39dc99"]}*/}
        {/*    className={"text-6xl font-semibold tracking-tight"}*/}
        {/*/>*/}
        <TypographyH2 className={"text-3xl font-normal font-mono"}>
            Elevate your projects with stunning aerial <br/>
            Photography and Videography. The sky is no  <br/>
            longer the limit.
        </TypographyH2>
    </div>
}