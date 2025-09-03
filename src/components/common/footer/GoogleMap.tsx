import {APIProvider, Map} from "@vis.gl/react-google-maps";

const position = {lat: 41.7151, lng: 44.8271};

export default function GoogleMap() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="w-[302px] h-[152px] rounded-xl overflow-hidden shadow-lg">
                <APIProvider apiKey="AIzaSyDLDM-L2CqouNYlrSdFpn5dvCemYYbPpjw">
                    <Map
                        zoom={9}
                        center={position}
                        mapId="6bc426cb7707caf0622fbbf9"
                    />
                </APIProvider>
            </div>
        </div>
    );
}
