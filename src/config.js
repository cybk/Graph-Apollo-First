const commonConfig = {
    env: process.env.NODE_ENV || 'Development',
    port: parseInt(process.env.PORT, 10) || 500,
    corsDomain: process.env.CORS_Domain || '*'
};

export default commonConfig;