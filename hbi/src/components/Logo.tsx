export const Logo = () => {
        const imgHBI: string = "https://media.licdn.com/dms/image/D4D0BAQGOF3yukiiJoA/company-logo_200_200/0/1714421044449/somoshbi_logo?e=2147483647&v=beta&t=v216suOeMFa-_aPOsS2vFVSR3N88zUOk2WgixsZEEuA"

        return(
                <div className="h-12 w-12 shadow mx-auto">
                  <img 
                  className="rounded-sm "
                  src={imgHBI}
                  alt="Logo HBI"
                  />
                </div>
        )
}