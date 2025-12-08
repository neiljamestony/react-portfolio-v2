export const HeaderContainer = {
    display: 'flex',
    justifyContent: 'start',
    gap: 1,
    alignItems: 'center' 
}

export const ProjectTitle = {
    fontFamily: 'Poppins, sans-serif', 
    fontWeight: 'bold', 
    marginTop: 1.5
}

export const ProjectContainer = {
    border: '1px solid #e1e1e1', 
    borderRadius: 2, 
    padding: 0.5, 
    display: "flex", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    cursor: "pointer",
    "&:hover": {
        color: "#fff",
        backgroundColor: "black",
        border: 'none'
    }
}

export const ProjectLink = {
    marginTop: 0.5,
    marginLeft: 2
}

export const ProjectName = {
    fontFamily: 'Poppins, sans-serif', 
    fontSize: 13, 
    paddingLeft: 1, 
    paddingRight: 1
}