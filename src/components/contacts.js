import { name, containerstyle } from "./getclass";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contacts() {
    return (
        <div className={name} style={containerstyle}>            
             <table class="contacts-table">
                <tr>
                    <th>                        
                        <a href="https://www.youtube.com/channel/UC_9sWziuh14-36tk--yRISg" target="_blank">< YouTubeIcon sx={{ color: "#ffc107", fontSize: 150 }} /></a>
                    </th>
                    <th>
                    <a href="https://www.instagram.com/slvjzz/" target="_blank">< InstagramIcon sx={{ color: "#ffc107", fontSize: 150 }} /></a>
                    </th>
                </tr>
                <tr>
                    <td>
                    <a href="mailto:salvo2@yandex.ru">< EmailIcon sx={{ color: "#ffc107", fontSize: 150 }} /></a>
                    </td>
                    <td>
                    <a href="https://github.com/slvjzz/" target="_blank">< GitHubIcon sx={{ color: "#ffc107", fontSize: 150 }} /></a>
                    </td>
                </tr>
            </table>
        </div>
    )
}