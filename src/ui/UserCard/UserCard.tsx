import { Avatar, Card, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserCard = () => {
    return(
        <Card>
            <Badge>
                <Avatar icon={<UserOutlined />}/>
            </Badge>
        </Card>
    )
}

export default UserCard