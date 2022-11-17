module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env(''),
          secretAccessKey: env(''),
          region: env('eu-central-1'),
          params: {
              Bucket: env('enjoye-strapi-images'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });
