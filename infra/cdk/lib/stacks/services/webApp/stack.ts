import * as core from '@aws-cdk/core';

import {EnvConstructProps} from "../../../types";
import {WebAppCloudFrontDistribution} from "../../../patterns/webAppCloudFrontDistribution";
import {PublicHostedZone} from "@aws-cdk/aws-route53";
import {Source} from "@aws-cdk/aws-s3-deployment";


export interface WebAppStackProps extends core.StackProps, EnvConstructProps {
}

export class WebAppStack extends core.Stack {
    webAppCloudFrontDistribution: WebAppCloudFrontDistribution;

    constructor(scope: core.App, id: string, props: WebAppStackProps) {
        super(scope, id, props);

        const {envSettings} = props;

        const domainZone = PublicHostedZone.fromHostedZoneAttributes(this, "DomainZone", {
            hostedZoneId: envSettings.hostedZone.id,
            zoneName: envSettings.hostedZone.name,
        });

        this.webAppCloudFrontDistribution = new WebAppCloudFrontDistribution(this, "WebApp", {
            sources: [
                Source.asset(`${props.envSettings.projectRootDir}/services/webapp/build`)
            ],
            domainZone,
            domainName: props.envSettings.domains.webApp,
            apiDomainName: props.envSettings.domains.api,
            certificateArn: props.envSettings.cloudFrontCertificateArn,
        });
    }

}