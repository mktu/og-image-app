import useAppSetting from "@hooks/useAppSetting";
import { AppSettingContext } from "contexts";

type Props = {
    children: React.ReactNode
}

const Provider : React.FC<Props> = ({
    children
})=> {
    const values = useAppSetting()
    return (
        <AppSettingContext.Provider value={values}>
            {children}
        </AppSettingContext.Provider>
    )
}

export default Provider