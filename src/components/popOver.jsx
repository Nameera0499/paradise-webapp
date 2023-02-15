import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function BasicPopover({ anchorEl, onClose }) {

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div id='child'>
            {
                open ? (<>
                    <div style={{
                        marginLeft: "1180px",
                        height: "780px",
                        width: "500px",
                        background: "#fff",
                        position: "fixed",
                        display: "flex",
                        zIndex: 1
                    }}>
                        <div>
                            <img style={{
                                marginTop: "120px",
                                height: "100px",
                                marginLeft: " 50px"
                            }} src="/images/user.png" />
                        </div>
                        <div style={{
                            marginTop: "140px",
                            marginLeft: "20px",
                            fontWeight: 900,
                            fontSize: "24px",
                        }}><span style={{ marginTop: "100px" }}>User</span></div>
                        <nav aria-label="main mailbox folders" style={{
                            marginTop: "220px",
                            marginLeft: "-240px"
                        }}>
                            <List sx={{ marginLeft: "30px" }}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <img src="/images/offer.png" height={"40px"} />
                                        </ListItemIcon>
                                        <ListItemText primary="Offers" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <img src="/images/faq.png" height={"40px"} />
                                        </ListItemIcon>
                                        <ListItemText primary="FAQ" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <img src="/images/termsOfUse.png" height={"40px"} />
                                        </ListItemIcon>
                                        <ListItemText primary="Terms Of Use" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <img src="/images/privacy.png" height={"40px"} />
                                        </ListItemIcon>
                                        <ListItemText primary="Privacy Policy" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </nav>
                    </div>
                    <div style={{
                        marginLeft: "1065px",
                        position: "fixed",
                        marginTop: "120px",
                        background: "#fff",
                        width: "120px",
                        height: "60px",
                        borderRadius: "50px 1px 1px 50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        zIndex: 1

                    }}   >
                        <div><img src="/images/close.png" onClick={onClose} /></div>
                        <div><span onClick={onClose}>Close</span></div>
                    </div></>) : null
            }
        </div>
    );
}