class AppConfig {
    public host = "localhost"; // Computer name/address of 
    public user = "root";
    public password = "";
    public database = "db";

    public port = 3001;
}

const appConfig = new AppConfig();
export default appConfig;