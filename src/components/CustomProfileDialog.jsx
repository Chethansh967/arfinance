import {Button, Card, CardContent, Popover, Stack } from '@mui/material'

function CustomProfileDialog({ open,anchorEl, onClose }) {
    const openPop = Boolean(anchorEl);
   const userProfile = [
  { label: "Name" },
  { label: "Profile Picture" },
  { label: "System Settings" },
  { label: "Logout" }
];


  return (
     <Popover
  open={openPop}
  anchorEl={anchorEl}
  onClose={onClose}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  PaperProps={{
  sx: { 
    width: 200, 
    borderRadius: 2,
    mt: "15px",
    p: 1 
  }
}}

>
  <Card sx={{ boxShadow: "none" }}>
    <CardContent>
     <Stack
            direction="column" 
            spacing={1} 
            sx={{ alignItems: "stretch" }} 
          >
            {userProfile.map((item, index) => (
              <Button
                key={index}
                fullWidth
                variant="text"
                color={item.label === "Logout" ? "error" : ""}
                sx={{
                  justifyContent: "flex-start", 
                  textTransform: "none",
                  paddingY: "6px"
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
    </CardContent>
  </Card>
</Popover>
  )
}

export default CustomProfileDialog
