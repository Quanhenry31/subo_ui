import React, { useContext, useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useDebounce } from '~/hooks';
import { useNavigate } from 'react-router-dom';
import SearchProduct from './Search';
import Testimonial from '~/components/Testimonial';
import { AuthContext } from '~/AuthContext';

const Payment = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const debounceValue = useDebounce(searchValue, 1000);

    const handleSearch = () => {
        axios.get(`http://localhost:5000/orders/search?q=${debounceValue}`).then((response) => {
            const filteredData = response.data.data.filter((order) => order.userID === user.id);
            setListOfPosts(filteredData);
        });
    };

    const handleInvoice = (data) => {
        navigate(`/${data.id}/details`);
    };

    const columns = [
        // {
        //     title: 'ID',
        //     dataIndex: 'id',
        //     sorter: (a, b) => a.id - b.id,
        // },
        // {
        //     title: 'UserID',
        //     dataIndex: 'userID',
        //     render: (text) => <a>{text}</a>,
        // },
        {
            title: 'Ngày Mua',
            dataIndex: 'orderDate',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
            title: 'Thời gian dự kiến',
            dataIndex: 'dateOk',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
        {
            title: 'AllPrice',
            dataIndex: 'allPrice',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">
                    <ExportOutlined onClick={() => handleInvoice(record)} />
                </Space>
            ),
        },
    ];

    const renderHeader = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse' }}>
            <div>
                <SearchProduct value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
        </div>
    );

    useEffect(() => {
        handleSearch();
    }, [debounceValue]);

    useEffect(() => {
        axios.get('http://localhost:5000/orders').then((response) => {
            const filteredData = response.data.data.filter((order) => order.userID === user.id);
            setListOfPosts(filteredData);
        });
    }, []);

    return (
        <>
            <Table title={renderHeader} rowKey="id" columns={columns} dataSource={listOfPosts} />
            <Testimonial />
        </>
    );
};

export default Payment;
