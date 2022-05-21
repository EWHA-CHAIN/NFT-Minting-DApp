import { useState } from 'react';
import NftCard from './components/nftcard';
import {fetchNFTs} from './util/fetchNFTs';
require("dotenv").config();

const Marketplace = () => {

    const [NFTs, setNFTs] = useState("")
    const contractAddress = /*컨트랙트 주소 작성*/

    return (
        <div className='marketplace'>
            <button onClick={() => {fetchNFTs(window.ethereum.selectedAddress, setNFTs, contractAddress)}}>Search</button>

            <section>
                /* 채워넣기 */
            </section>
        </div>
    )
}


export default Marketplace;