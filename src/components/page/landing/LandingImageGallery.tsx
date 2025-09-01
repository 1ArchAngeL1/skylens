import Masonry from "@/blocks/Components/Masonry/Masonry";


export const LandingImageGallery: React.FC = () => {
    const items = [
        {
            id: "1",
            img: "/landing/tbilisi_view1.jpg",
            url: "/landing/tbilisi_view1.jpg",
            height: 400,
        },
        {
            id: "2",
            img: "/landing/tbilisi_view2.webp",
            url: "/landing/tbilisi_view2.webp",
            height: 400,
        },
        {
            id: "3",
            img: "/landing/tbilisi_view3.jpg",
            url: "/landing/tbilisi_view3.jpg",
            height: 400,
        },
        {
            id: "4",
            img: "/landing/tbilisi_view4.jpg",
            url: "/landing/tbilisi_view4.jpg",
            height: 400,
        },
        {
            id: "5",
            img: "/landing/tbilisi_view5.webp",
            url: "/landing/tbilisi_view5.webp",
            height: 400,
        },
        {
            id: "6",
            img: "/landing/tbilisi_view6.jpg",
            url: "/landing/tbilisi_view6.jpg",
            height: 550,
        },
        {
            id: "7",
            img: "/landing/tbilisi_view7.jpg",
            url: "/landing/tbilisi_view7.jpg",
            height: 250,
        },
        {
            id: "8",
            img: "/landing/tbilisi_view9.webp",
            url: "/landing/tbilisi_view9.webp",
            height: 600,
        },
        {
            id: "9",
            img: "/landing/tbilisi_view10.jpg",
            url: "/landing/tbilisi_view10.jpg",
            height: 400,
        },
        {
            id: "10",
            img: "/landing/tbilisi_view11.jpg",
            url: "/landing/tbilisi_view11.jpg",
            height: 250,
        },
        {
            id: "11",
            img: "/landing/tbilisi_view13.jpg",
            url: "/landing/tbilisi_view13.jpg",
            height: 250,
        },
    ];

    return <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="center"
        scaleOnHover={true}
        hoverScale={1.1}
        blurToFocus={true}
        colorShiftOnHover={false}
    />;
}