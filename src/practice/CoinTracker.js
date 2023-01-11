import {useEffect, useState} from "react";
import axios from "axios";

const CoinTracker = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [buyCoin, setBuyCoin] = useState(0);
    const [selectCoin, setSelectCoin] = useState(0);

    useEffect(() => {
            const url = "https://api.coinpaprika.com/v1/tickers";
            axios
                .get(url)
                .then((response) => {
                    console.log('success!')
                    console.log(response);
                    setCoins(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log('fail!');
                    console.log(error);
                });
        }
        , []);

    const onSelect = (event) => {
        setSelectCoin(event.target.value);
    };


    const onHowManyCoin = (event) => {
        const coin = coins[selectCoin];

        console.log(coin);

        setBuyCoin(event.target.value / coin.quotes.USD.price);
    };


    return (
        <div>
            <h1>The Coins! {loading ? null : coins.length}</h1>
            <input placeholder="내 돈으로 얼마만큼의 코인을 살 수 있을까?" type="number" onChange={onHowManyCoin}/> <br/>
            <h3>코인 {buyCoin}개를 살 수 있다.</h3>
            {loading ? <strong>Loadings...</strong> :
                <select onChange={onSelect}>
                    {coins.map((coin, index) => {
                        return <option value={index} key={coin.id}>{coin.id},
                            가격: {coin.quotes.USD.price} USD</option>
                    })}
                </select>
            }

        </div>
    );

};

export default CoinTracker
 