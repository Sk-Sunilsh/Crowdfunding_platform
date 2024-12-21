import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2d9311D4832a5BEaFFB32e5783eBD9376DEb9329"
);

export default instance;
