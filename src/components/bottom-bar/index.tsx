import Like from '../../assets/like.svg';
import Heart from '../../assets/heart.svg';
import Out from '../../assets/out.svg';

import './index.scss'
const HBottomBar = () => {
    return (
        <div class="hancens-bottom-bar">
            <input placeholder="留下你的精彩评论" type="text"/>
            <div class="icons">
                <img style="padding:8px" src={Like} alt=""/>
                <img style="padding:8px" src={Heart} alt=""/>
                <img style="padding:8px" src={Out} alt=""/>
            </div>
        </div>
    )
}
export default HBottomBar