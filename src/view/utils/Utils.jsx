export const severityMapping = {
    "CRITICAL": {
        text: "text-red-500",
        bg: "bg-red-500/40"
    },
    "HIGH": {
        text: "text-orange-500",
        bg: "bg-orange-500/40"
    },
    "MEDIUM": {
        text: "text-yellow-500",
        bg: "bg-yellow-500/45"
    },
    "LOW": {
        text: "text-green-500",
        bg: "bg-green-500/40"
    },
    "NONE": {
        text: "text-grey-500",
        bg: ""
    }
}

export const api_domain = 'http://127.0.0.1:7777'

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function camelCaseToString(string){
    if(Object.prototype.toString.call(string).match('[object String]')){
        return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){return str.toUpperCase();})
    }
    return console.error("Parameter not of type 'String'");
}

export const temp = {
    "resultsPerPage": 1,
    "startIndex": 0,
    "totalResults": 1,
    "format": "NVD_CVE",
    "version": "2.0",
    "timestamp": "2024-04-27T12:00:49.330",
    "vulnerabilities": [
        {
            "cve": {
                "id": "CVE-2021-44228",
                "sourceIdentifier": "security@apache.org",
                "published": "2021-12-10T10:15:09.143",
                "lastModified": "2023-11-07T03:39:36.897",
                "vulnStatus": "Modified",
                "cisaExploitAdd": "2021-12-10",
                "cisaActionDue": "2021-12-24",
                "cisaRequiredAction": "For all affected software assets for which updates exist, the only acceptable remediation actions are: 1) Apply updates; OR 2) remove affected assets from agency networks. Temporary mitigations using one of the measures provided at https://www.cisa.gov/uscert/ed-22-02-apache-log4j-recommended-mitigation-measures are only acceptable until updates are available.",
                "cisaVulnerabilityName": "Apache Log4j2 Remote Code Execution Vulnerability",
                "descriptions": [
                    {
                        "lang": "en",
                        "value": "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled. From log4j 2.15.0, this behavior has been disabled by default. From version 2.16.0 (along with 2.12.2, 2.12.3, and 2.3.1), this functionality has been completely removed. Note that this vulnerability is specific to log4j-core and does not affect log4net, log4cxx, or other Apache Logging Services projects."
                    },
                    {
                        "lang": "es",
                        "value": "Las características JNDI de Apache Log4j2 2.0-beta9 hasta 2.15.0 (excluyendo las versiones de seguridad 2.12.2, 2.12.3 y 2.3.1) utilizadas en la configuración, los mensajes de registro y los parámetros no protegen contra LDAP controlado por un atacante y otros puntos finales relacionados con JNDI. Un atacante que pueda controlar los mensajes de registro o los parámetros de los mensajes de registro puede ejecutar código arbitrario cargado desde servidores LDAP cuando la sustitución de la búsqueda de mensajes está habilitada. A partir de la versión 2.15.0 de log4j, este comportamiento ha sido deshabilitado por defecto. A partir de la versión 2.16.0 (junto con las versiones 2.12.2, 2.12.3 y 2.3.1), esta funcionalidad se ha eliminado por completo. Tenga en cuenta que esta vulnerabilidad es específica de log4j-core y no afecta a log4net, log4cxx u otros proyectos de Apache Logging Services"
                    }
                ],
                "metrics": {
                    "cvssMetricV31": [
                        {
                            "source": "nvd@nist.gov",
                            "type": "Primary",
                            "cvssData": {
                                "version": "3.1",
                                "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H",
                                "attackVector": "NETWORK",
                                "attackComplexity": "LOW",
                                "privilegesRequired": "NONE",
                                "userInteraction": "NONE",
                                "scope": "CHANGED",
                                "confidentialityImpact": "HIGH",
                                "integrityImpact": "HIGH",
                                "availabilityImpact": "HIGH",
                                "baseScore": 10,
                                "baseSeverity": "CRITICAL"
                            },
                            "exploitabilityScore": 3.9,
                            "impactScore": 6
                        }
                    ],
                    "cvssMetricV2": [
                        {
                            "source": "nvd@nist.gov",
                            "type": "Primary",
                            "cvssData": {
                                "version": "2.0",
                                "vectorString": "AV:N/AC:M/Au:N/C:C/I:C/A:C",
                                "accessVector": "NETWORK",
                                "accessComplexity": "MEDIUM",
                                "authentication": "NONE",
                                "confidentialityImpact": "COMPLETE",
                                "integrityImpact": "COMPLETE",
                                "availabilityImpact": "COMPLETE",
                                "baseScore": 9.3
                            },
                            "baseSeverity": "HIGH",
                            "exploitabilityScore": 8.6,
                            "impactScore": 10,
                            "acInsufInfo": false,
                            "obtainAllPrivilege": false,
                            "obtainUserPrivilege": false,
                            "obtainOtherPrivilege": false,
                            "userInteractionRequired": false
                        }
                    ]
                },
                "weaknesses": [
                    {
                        "source": "security@apache.org",
                        "type": "Primary",
                        "description": [
                            {
                                "lang": "en",
                                "value": "CWE-20"
                            },
                            {
                                "lang": "en",
                                "value": "CWE-400"
                            },
                            {
                                "lang": "en",
                                "value": "CWE-502"
                            }
                        ]
                    },
                    {
                        "source": "nvd@nist.gov",
                        "type": "Secondary",
                        "description": [
                            {
                                "lang": "en",
                                "value": "CWE-917"
                            }
                        ]
                    }
                ],
                "configurations": [
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.0.1",
                                        "versionEndExcluding": "2.3.1",
                                        "matchCriteriaId": "03FA5E81-F9C0-403E-8A4B-E4284E4E7B72"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.4.0",
                                        "versionEndExcluding": "2.12.2",
                                        "matchCriteriaId": "AED3D5EC-DAD5-4E5F-8BBD-B4E3349D84FC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.13.0",
                                        "versionEndExcluding": "2.15.0",
                                        "matchCriteriaId": "D31D423D-FC4D-428A-B863-55AF472B80DC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:2.0:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "17854E42-7063-4A55-BF2A-4C7074CC2D60"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:2.0:beta9:*:*:*:*:*:*",
                                        "matchCriteriaId": "53F32FB2-6970-4975-8BD0-EAE12E9AD03A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:2.0:rc1:*:*:*:*:*:*",
                                        "matchCriteriaId": "B773ED91-1D39-42E6-9C52-D02210DE1A94"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:apache:log4j:2.0:rc2:*:*:*:*:*:*",
                                        "matchCriteriaId": "EF24312D-1A62-482E-8078-7EC24758B710"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "operator": "AND",
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:siemens:sppa-t3000_ses3000:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "755BA221-33DD-40A2-A517-8574D042C261"
                                    }
                                ]
                            },
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:siemens:sppa-t3000_ses3000_firmware:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "E8320869-CBF4-4C92-885C-560C09855BFA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:captial:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2019.1",
                                        "matchCriteriaId": "07856DAA-EDB4-4522-BA16-CD302C9E39EF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:captial:2019.1:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "F7AD819D-D093-472E-AA47-1A925111E4C8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:captial:2019.1:sp1912:*:*:*:*:*:*",
                                        "matchCriteriaId": "2D07A11A-A3C6-4D44-B2E0-A8358D23947A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:comos:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "61597661-A3B0-4A14-AA6B-C911E0063390"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_advanced_reports:4.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "BB524B33-68E7-46A2-B5CE-BCD9C3194B8B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_advanced_reports:4.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "5F852C6D-44A0-4CCE-83C7-4501CAD73F9F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_advanced_reports:4.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "AA61161C-C2E7-4852-963E-E2D3DFBFDC7B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_advanced_reports:5.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A76AA04A-BB43-4027-895E-D1EACFCDF41B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_advanced_reports:5.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2A6B60F3-327B-49B7-B5E4-F1C60896C9BB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_info_center:5.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4BCF281E-B0A2-49E2-AEF8-8691BDCE08D5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:desigo_cc_info_center:5.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A87EFCC4-4BC1-4FEA-BAA4-8FF221838EBD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:e-car_operation_center:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2021-12-13",
                                        "matchCriteriaId": "B678380B-E95E-4A8B-A49D-D13B62AA454E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energy_engage:3.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4557476B-0157-44C2-BB50-299E7C7E1E72"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip:8.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "991B2959-5AA3-4B68-A05A-42D9860FAA9D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip:8.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7E5948A0-CA31-41DF-85B6-1E6D09E5720B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip:8.7:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4C08D302-EEAC-45AA-9943-3A5F09E29FAB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip:9.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D53BA68C-B653-4507-9A2F-177CF456960F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip_prepay:3.7:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1F0C3D5E-579F-42C6-9D8C-37969A1D17D2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:energyip_prepay:3.8:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2C16C460-9482-4A22-92AC-1AE0E87D7F28"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:gma-manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "8.6.2j-398",
                                        "matchCriteriaId": "0E180527-5C36-4158-B017-5BEDC0412FD6"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:head-end_system_universal_device_integration_system:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "AFDADA98-1CD0-45DA-9082-BFC383F7DB97"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:industrial_edge_management:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "E33D707F-100E-4DE7-A05B-42467DE75EAC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:industrial_edge_management_hub:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2021-12-13",
                                        "matchCriteriaId": "DD3EAC80-44BE-41D2-8D57-0EE3DBA1E1B1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:logo\\!_soft_comfort:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2AC8AB52-F4F4-440D-84F5-2776BFE1957A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:mendix:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6AF6D774-AC8C-49CA-A00B-A2740CA8FA91"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:mindsphere:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2021-12-11",
                                        "matchCriteriaId": "6423B1A7-F09F-421A-A0AC-3059CB89B110"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:navigator:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2021-12-13",
                                        "matchCriteriaId": "48C6A61B-2198-4B9E-8BCF-824643C81EC3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:nx:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "BEE2F7A1-8281-48F1-8BFB-4FE0D7E1AEF4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:opcenter_intelligence:*:*:*:*:*:*:*:*",
                                        "versionEndIncluding": "3.2",
                                        "matchCriteriaId": "C74B9880-FFF9-48CA-974F-54FB80F30D2D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:operation_scheduler:*:*:*:*:*:*:*:*",
                                        "versionEndIncluding": "1.1.3",
                                        "matchCriteriaId": "74D1F4AD-9A60-4432-864F-4505B3C60659"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:sentron_powermanager:4.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7ABA5332-8D1E-4129-A557-FCECBAC12827"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:sentron_powermanager:4.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9C3AA865-5570-4C8B-99DE-431AD7B163F1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siguard_dsa:4.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "00E03FB6-37F9-4559-8C86-F203D6782920"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siguard_dsa:4.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "90439591-BA01-4007-A2B6-B316548D4595"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siguard_dsa:4.4:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "E1F3B8B4-4D1B-4913-BD5F-1A04B47F829A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:sipass_integrated:2.80:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "83E77D85-0AE8-41D6-AC0C-983A8B73C831"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:sipass_integrated:2.85:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "02B28A44-3708-480D-9D6D-DDF8C21A15EC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_command:*:*:*:*:*:*:*:*",
                                        "versionEndIncluding": "4.16.2.1",
                                        "matchCriteriaId": "2FC0A575-F771-4B44-A0C6-6A5FD98E5134"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_control_pro:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6D1D6B61-1F17-4008-9DFB-EF419777768E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_identity:1.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9772EE3F-FFC5-4611-AD9A-8AD8304291BB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_identity:1.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CF524892-278F-4373-A8A3-02A30FA1AFF4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_vantage:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F30DE588-9479-46AA-8346-EA433EE83A5F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:siveillance_viewpoint:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4941EAD6-8759-4C72-ABA6-259C0E838216"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:solid_edge_cam_pro:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "5BF2708F-0BD9-41BF-8CB1-4D06C4EFB777"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:solid_edge_harness_design:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2020",
                                        "matchCriteriaId": "0762031C-DFF1-4962-AE05-0778B27324B9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:solid_edge_harness_design:2020:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "96271088-1D1B-4378-8ABF-11DAB3BB4DDC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:solid_edge_harness_design:2020:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "2595AD24-2DF2-4080-B780-BC03F810B9A9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:solid_edge_harness_design:2020:sp2002:*:*:*:*:*:*",
                                        "matchCriteriaId": "88096F08-F261-4E3E-9EEB-2AB0225CD6F3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_4:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "4.70",
                                        "matchCriteriaId": "044994F7-8127-4F03-AA1A-B2AB41D68AF5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_4:4.70:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "A6CB3A8D-9577-41FB-8AC4-0DF8DE6A519C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_4:4.70:sp7:*:*:*:*:*:*",
                                        "matchCriteriaId": "17B7C211-6339-4AF2-9564-94C7DE52EEB7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_4:4.70:sp8:*:*:*:*:*:*",
                                        "matchCriteriaId": "DBCCBBBA-9A4F-4354-91EE-10A1460BBA3F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_7:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.30",
                                        "matchCriteriaId": "12F81F6B-E455-4367-ADA4-8A5EC7F4754A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_7:2.30:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A5EF509E-3799-4718-B361-EFCBA17AEEF3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_7:2.30:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "8CA31645-29FC-4432-9BFC-C98A808DB8CF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:spectrum_power_7:2.30:sp2:*:*:*:*:*:*",
                                        "matchCriteriaId": "BB424991-0B18-4FFC-965F-FCF4275F56C5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:teamcenter:*:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1B209EFE-77F2-48CD-A880-ABA0A0A81AB1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:vesys:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2019.1",
                                        "matchCriteriaId": "72D238AB-4A1F-458D-897E-2C93DCD7BA6C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:vesys:2019.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9778339A-EA93-4D18-9A03-4EB4CBD25459"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:vesys:2019.1:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "1747F127-AB45-4325-B9A1-F3D12E69FFC8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:vesys:2019.1:sp1912:*:*:*:*:*:*",
                                        "matchCriteriaId": "18BBEF7C-F686-4129-8EE9-0F285CE38845"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:xpedition_enterprise:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "AD525494-2807-48EA-AED0-11B9CB5A6A9B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:siemens:xpedition_package_integrator:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1EDCBF98-A857-48BC-B04D-6F36A1975AA5"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:audio_development_kit:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "099344DD-8AEE-49A0-88A8-691A8A1E651F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:computer_vision_annotation_tool:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "12A06BF8-E4DC-4389-8A91-8AC7598E0009"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:data_center_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "5.1",
                                        "matchCriteriaId": "8555F365-2BFD-4A0A-A7D0-1459241758B3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:genomics_kernel_library:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "18989EBC-E1FB-473B-83E0-48C8896C2E96"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:oneapi_sample_browser:-:*:*:*:*:eclipse:*:*",
                                        "matchCriteriaId": "EDE66B6C-25E5-49AE-B35F-582130502222"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:secure_device_onboard:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "22BEE177-D117-478C-8EAD-9606DEDF9FD5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:sensor_solution_firmware_development_kit:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F021E2E7-0D8F-4336-82A6-77E521347C4F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:system_debugger:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1F66B0A2-22C0-41D5-B866-1764DEC12CB2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:intel:system_studio:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "FC619106-991C-413A-809D-C2410EBA4CDB"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:debian:debian_linux:9.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DEECE5FC-CACF-4496-A3E7-164736409252"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:debian:debian_linux:10.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "07B237A9-69A3-4A9C-9DA0-4E06BD37AE73"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:debian:debian_linux:11.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "FA6FEEC2-9F11-4643-8827-749718254FED"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:fedoraproject:fedora:34:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A930E247-0B43-43CB-98FF-6CE7B8189835"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:fedoraproject:fedora:35:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "80E516C0-98A4-4ADE-B69F-66A772E2BAAA"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:sonicwall:email_security:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "10.0.12",
                                        "matchCriteriaId": "B5BAA8A5-74B3-48EB-8287-302927197A4E"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:active_iq_unified_manager:-:*:*:*:*:linux:*:*",
                                        "matchCriteriaId": "F3E0B672-3E06-4422-B2A4-0BD073AEC2A1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:active_iq_unified_manager:-:*:*:*:*:vmware_vsphere:*:*",
                                        "matchCriteriaId": "3A756737-1CC4-42C2-A4DF-E1C893B4E2D5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:active_iq_unified_manager:-:*:*:*:*:windows:*:*",
                                        "matchCriteriaId": "B55E8D50-99B4-47EC-86F9-699B67D473CE"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:cloud_insights:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "26FCA75B-4282-4E0F-95B4-640A82C8E91C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:cloud_manager:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "197D0D80-6702-4B61-B681-AFDBA7D69067"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:cloud_secure_agent:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F0F202E8-97E6-4BBB-A0B6-4CA3F5803C08"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:oncommand_insight:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F1BE6C1F-2565-4E97-92AA-16563E5660A5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:ontap_tools:-:*:*:*:*:vmware_vsphere:*:*",
                                        "matchCriteriaId": "CBCC384C-5DF0-41AB-B17B-6E9B6CAE8065"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:netapp:snapcenter:-:*:*:*:*:vmware_vsphere:*:*",
                                        "matchCriteriaId": "F3A48D58-4291-4D3C-9CEA-BF12183468A7"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:advanced_malware_protection_virtual_private_cloud_appliance:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.5.4",
                                        "matchCriteriaId": "4E52AF19-0158-451B-8E36-02CB6406083F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:automated_subsea_tuning:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.1.0",
                                        "matchCriteriaId": "CB21CFB4-4492-4C5D-BD07-FFBE8B5D92B6"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:broadworks:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2021.11_1.162",
                                        "matchCriteriaId": "97426511-9B48-46F5-AC5C-F9781F1BAE2F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:business_process_automation:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.0.000.115",
                                        "matchCriteriaId": "82306B9F-AE97-4E29-A8F7-2E5BA52998A7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:business_process_automation:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "3.1.000.000",
                                        "versionEndExcluding": "3.1.000.044",
                                        "matchCriteriaId": "4C903C85-DC0F-47D8-B8BE-7A666877B017"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:business_process_automation:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "3.2.000.000",
                                        "versionEndExcluding": "3.2.000.009",
                                        "matchCriteriaId": "E4C6F9E0-5DCE-431D-AE7E-B680AC1F9332"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloud_connect:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.6\\(1\\)",
                                        "matchCriteriaId": "52CF6199-8028-4076-952B-855984F30129"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "4.10.0.16",
                                        "matchCriteriaId": "622BB8D9-AC81-4C0F-A5C5-C5E51F0BC0D1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_cost_optimizer:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "5.5.2",
                                        "matchCriteriaId": "38FB3CE1-5F62-4798-A825-4E3DB07E868F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite_admin:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "5.3.1",
                                        "matchCriteriaId": "29CDB878-B085-448E-AB84-25B1E2D024F8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_workload_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "5.5.2",
                                        "matchCriteriaId": "C25FDA96-9490-431F-B8B6-CC2CC272670E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.9.1.3",
                                        "matchCriteriaId": "51CD9E4C-9385-435C-AD18-6C36C8DF7B65"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.10.0",
                                        "versionEndExcluding": "2.10.0.1",
                                        "matchCriteriaId": "FC0AC4C1-CB06-4084-BFBB-5B702C384C53"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_mobile_experiences:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3871EBD2-F270-435A-B98C-A282E1C52693"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:contact_center_domain_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.5\\(1\\)",
                                        "matchCriteriaId": "8D4DF34B-E8C2-41C8-90E2-D119B50E4E7E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:contact_center_management_portal:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.5\\(1\\)",
                                        "matchCriteriaId": "C8EF64DA-73E4-4E5E-8F9A-B837C947722E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_data_gateway:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.0.2",
                                        "matchCriteriaId": "66E1E4FC-0B6E-4CFA-B003-91912F8785B2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_data_gateway:3.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1B2390C3-C319-4F05-8CF0-0D30F9931507"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_controller:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.0.1",
                                        "matchCriteriaId": "C154491E-06C7-48B0-AC1D-89BBDBDB902E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_controller:3.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1E98EC48-0CED-4E02-9CCB-06EF751F2BDC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_optimization_engine:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.0.1",
                                        "matchCriteriaId": "C569DC2A-CFF6-4E13-A50C-E215A4F96D99"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_optimization_engine:3.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "258A51AC-6649-4F67-A842-48A7AE4DCEE1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_platform_infrastructure:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "4.0.1",
                                        "matchCriteriaId": "8DC22505-DE11-4A1B-8C06-1E306419B031"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_platform_infrastructure:4.1.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9E31AC54-B928-48B5-8293-F5F4A7A8C293"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_zero_touch_provisioning:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.0.1",
                                        "matchCriteriaId": "5B8AE870-6FD0-40D2-958B-548E2D7A7B75"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_zero_touch_provisioning:3.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "68E7D83B-B6AC-45B1-89A4-D18D7A6018DD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:customer_experience_cloud_agent:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "1.12.1",
                                        "matchCriteriaId": "17660B09-47AA-42A2-B5FF-8EBD8091C661"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cyber_vision_sensor_management_extension:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "4.0.3",
                                        "matchCriteriaId": "FBEF9A82-16AE-437A-B8CF-CC7E9B6C4E44"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:data_center_network_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.3\\(1\\)",
                                        "matchCriteriaId": "843147AE-8117-4FE9-AE74-4E1646D55642"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:data_center_network_manager:11.3\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7EB871C9-CA14-4829-AED3-CC2B35E99E92"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_center:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.1.2.8",
                                        "matchCriteriaId": "4FF8A83D-A282-4661-B133-213A8838FB27"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_center:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.2.2.0",
                                        "versionEndExcluding": "2.2.2.8",
                                        "matchCriteriaId": "139CDAA5-63E9-4E56-AF72-745BD88E4B49"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_center:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "2.2.3.0",
                                        "versionEndExcluding": "2.2.3.4",
                                        "matchCriteriaId": "01FD99C4-BCB1-417E-ADCE-73314AD2E857"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_spaces\\:_connector:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.5",
                                        "matchCriteriaId": "9031BE8A-646A-4581-BDE5-750FB0CE04CB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:emergency_responder:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.5\\(4\\)",
                                        "matchCriteriaId": "15BED3E2-46FF-4E58-8C5D-4D8FE5B0E527"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:enterprise_chat_and_email:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.0\\(1\\)",
                                        "matchCriteriaId": "7C950436-2372-4C4B-9B56-9CB48D843045"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:*:*:*:*:*:*:*:*",
                                        "versionEndIncluding": "4.1.1",
                                        "matchCriteriaId": "0B61F186-D943-4711-B3E0-875BB570B142"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.6\\(1\\)",
                                        "matchCriteriaId": "2A285C40-170D-4C95-8031-2C6E4D5FB1D4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3C0F02B5-AA2A-48B2-AE43-38B45532C563"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:fog_director:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "830BDB28-963F-46C3-8D50-638FDABE7F64"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.4.0",
                                        "matchCriteriaId": "54553C65-6BFA-40B1-958D-A4E3289D6B1D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:2.4.0:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "439948AD-C95D-4FC3-ADD1-C3D241529F12"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:integrated_management_controller_supervisor:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.3.2.1",
                                        "matchCriteriaId": "9C2002AE-0F3C-4A06-9B9A-F77A9F700EB2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:intersight_virtual_appliance:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "1.0.9-361",
                                        "matchCriteriaId": "596A986D-E7DC-4FC4-A776-6FE87A91D7E4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:iot_operations_dashboard:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DD93434E-8E75-469C-B12B-7E2B6EDCAA79"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_assurance_engine:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "6.0.2",
                                        "matchCriteriaId": "78684844-4974-41AD-BBC1-961F60025CD2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_services_orchestrator:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "5.3.5.1",
                                        "matchCriteriaId": "3A00D235-FC9C-4EB7-A16C-BB0B09802E61"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_services_orchestrator:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "5.4",
                                        "versionEndExcluding": "5.4.5.2",
                                        "matchCriteriaId": "C60FDD1B-898E-4FCB-BDE2-45A7CBDBAF4F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_services_orchestrator:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "5.5",
                                        "versionEndExcluding": "5.5.4.1",
                                        "matchCriteriaId": "E7A33E5F-BBC7-4917-9C63-900248B546D9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_services_orchestrator:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "5.6",
                                        "versionEndExcluding": "5.6.3.1",
                                        "matchCriteriaId": "12D98A7C-4992-4E58-A6BD-3D8173C8F2B0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:nexus_dashboard:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.1.2",
                                        "matchCriteriaId": "E2DDC1AF-31B5-4F05-B84F-8FD23BE163DA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:nexus_insights:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "6.0.2",
                                        "matchCriteriaId": "A4540CF6-D33E-4D33-8608-11129D6591FA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:optical_network_controller:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "1.1.0",
                                        "matchCriteriaId": "129A7615-99E7-41F8-8EBC-CEDA10AD89AD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:packaged_contact_center_enterprise:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.6",
                                        "matchCriteriaId": "5F46A7AC-C133-442D-984B-BA278951D0BF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:packaged_contact_center_enterprise:11.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A1A75AB6-C3A7-4299-B35A-46A4BCD00816"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "14.4.1",
                                        "matchCriteriaId": "0A73E888-C8C2-4AFD-BA60-566D45214BCA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:prime_service_catalog:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.1",
                                        "matchCriteriaId": "4B0D0FD0-ABC6-465F-AB8D-FA8788B1B2DD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "20.3.4.1",
                                        "matchCriteriaId": "D673F6F7-C42A-4538-96F0-34CB4F0CB080"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "20.4",
                                        "versionEndExcluding": "20.4.2.1",
                                        "matchCriteriaId": "FD374819-3CED-4260-90B6-E3C1333EAAD2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "20.5",
                                        "versionEndExcluding": "20.5.1.1",
                                        "matchCriteriaId": "D2D89973-94AF-4BE7-8245-275F3FEB30F4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "20.6",
                                        "versionEndExcluding": "20.6.2.1",
                                        "matchCriteriaId": "91A9A889-2C2B-4147-8108-C35291761C15"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.2.1",
                                        "matchCriteriaId": "D0EEA1EC-C63C-4C7D-BFAE-BA4556332242"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.0\\(1p\\)",
                                        "matchCriteriaId": "ACE22D97-42FA-4179-99E5-C2EE582DB7FF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_director:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "6.8.2.0",
                                        "matchCriteriaId": "F6B5DB6D-9E7D-4403-8028-D7DA7493716B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:*:*:*:*:-:*:*:*",
                                        "versionEndExcluding": "11.5\\(1\\)",
                                        "matchCriteriaId": "B98D7AD5-0590-43FB-8AC0-376C9C500C15"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:*:*:*:*:session_management:*:*:*",
                                        "versionEndExcluding": "11.5\\(1\\)",
                                        "matchCriteriaId": "D9DA1900-9972-4DFD-BE2E-74DABA1ED9A9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "42A41C41-A370-4C0E-A49D-AD42B2F3FB5C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1\\):*:*:*:-:*:*:*",
                                        "matchCriteriaId": "7E958AFF-185D-4D55-B74B-485BEAEC42FD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1\\):*:*:*:session_management:*:*:*",
                                        "matchCriteriaId": "F770709C-FFB2-4A4E-A2D8-2EAA23F2E87C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1\\)su3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B85B81F9-8837-426E-8639-AB0712CD1A96"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager_im_and_presence_service:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.5\\(1\\)",
                                        "matchCriteriaId": "C1CCCD27-A247-4720-A2FE-C8ED55D1D0DE"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager_im_and_presence_service:11.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "34D89C42-AAD9-4B04-9F95-F77681E39553"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.6\\(2\\)",
                                        "matchCriteriaId": "897C8893-B0B6-4D6E-8D70-31B421D80B9A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:11.6\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "91D62A73-21B5-4D16-A07A-69AED2D40CC0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_express:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.5\\(1\\)",
                                        "matchCriteriaId": "B0492049-D3AC-4512-A4BF-C9C26DA72CB0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.6",
                                        "matchCriteriaId": "3868A8AA-6660-4332-AB0C-089C150D00E7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:11.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "58BD72D6-4A79-49C9-9652-AB0136A591FA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:12.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A32761FD-B435-4E51-807C-2B245857F90E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:12.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "154F7F71-53C5-441C-8F5C-0A82CB0DEC43"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unity_connection:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.5\\(1\\)",
                                        "matchCriteriaId": "65FD3873-2663-4C49-878F-7C65D4B8E455"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:video_surveillance_operations_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "7.14.4",
                                        "matchCriteriaId": "0886FB04-24AA-4995-BA53-1E44F94E114E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:virtual_topology_system:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "2.6.7",
                                        "matchCriteriaId": "C61805C1-1F73-462C-A9CA-BB0CA4E57D0B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:virtualized_infrastructure_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.2.0",
                                        "matchCriteriaId": "5EB39834-0F6D-4BD7-AFEC-DD8BEE46DA50"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:virtualized_infrastructure_manager:*:*:*:*:*:*:*:*",
                                        "versionStartIncluding": "3.4.0",
                                        "versionEndExcluding": "3.4.4",
                                        "matchCriteriaId": "0B78DD21-15F2-47A4-8A99-6DB6756920AC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:virtualized_voice_browser:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.5\\(1\\)",
                                        "matchCriteriaId": "7C6222EB-36E1-4CD5-BD69-5A921ED5DA6A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "7.3.0.2",
                                        "matchCriteriaId": "C200CABD-F91B-49C4-A262-C56370E44B4C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.0",
                                        "matchCriteriaId": "DE22BE9B-374E-43DC-BA91-E3B9699A4C7C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "61D1081F-87E8-4E8B-BEBD-0F239E745586"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release1:*:*:*:*:*:*",
                                        "matchCriteriaId": "8D138973-02B0-4FEC-A646-FF1278DA1EDF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release2:*:*:*:*:*:*",
                                        "matchCriteriaId": "30B55A5B-8C5E-4ECB-9C85-A8A3A3030850"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3:*:*:*:*:*:*",
                                        "matchCriteriaId": "14DBEC10-0641-441C-BE15-8F72C1762DCE"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3:-:*:*:*:*:*",
                                        "matchCriteriaId": "205C1ABA-2A4F-480F-9768-7E3EC43B03F5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3_security_patch4:*:*:*:*:*:*",
                                        "matchCriteriaId": "D36FE453-C43F-448B-8A59-668DE95468C0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3_security_patch5:*:*:*:*:*:*",
                                        "matchCriteriaId": "E8DF0944-365F-4149-9059-BDFD6B131DC5"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3_service_pack_2:*:*:*:*:*:*",
                                        "matchCriteriaId": "6B37AA08-13C7-4FD0-8402-E344A270C8F7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release3_service_pack_3:*:*:*:*:*:*",
                                        "matchCriteriaId": "2AA56735-5A5E-4D8C-B09D-DBDAC2B5C8E9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:maintenance_release4:*:*:*:*:*:*",
                                        "matchCriteriaId": "4646849B-8190-4798-833C-F367E28C1881"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:4.0:-:*:*:*:*:*:*",
                                        "matchCriteriaId": "4D6CF856-093A-4E89-A71D-50A2887C265B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:4.0:maintenance_release1:*:*:*:*:*:*",
                                        "matchCriteriaId": "B36A9043-0621-43CD-BFCD-66529F937859"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:4.0:maintenance_release2:*:*:*:*:*:*",
                                        "matchCriteriaId": "8842B42E-C412-4356-9F54-DFC53B683D3E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:4.0:maintenance_release3:*:*:*:*:*:*",
                                        "matchCriteriaId": "D25BC647-C569-46E5-AD45-7E315EBEB784"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:workload_optimization_manager:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.2.1",
                                        "matchCriteriaId": "B468EDA1-CDEF-44D4-9D62-C433CF27F631"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:unified_intelligence_center:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "12.6\\(1\\)",
                                        "matchCriteriaId": "C90C6CD1-4678-4621-866B-F0CE819C8000"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:unified_sip_proxy:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "10.2.1v2",
                                        "matchCriteriaId": "9E4905E2-2129-469C-8BBD-EDA258815E2B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:unified_workforce_optimization:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "11.5\\(1\\)",
                                        "matchCriteriaId": "EC86AC6C-7C08-4EB9-A588-A034113E4BB1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "operator": "AND",
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_1010:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7FFE3880-4B85-4E23-9836-70875D5109F7"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_1120:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "727A02E8-40A1-4DFE-A3A2-91D628D3044F"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_1140:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "19F6546E-28F4-40DC-97D6-E0E023FE939B"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_1150:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EB3B0EC3-4654-4D90-9D41-7EC2AD1DDF99"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_2110:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "52D96810-5F79-4A83-B8CA-D015790FCF72"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_2120:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "16FE2945-4975-4003-AE48-7E134E167A7F"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_2130:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DCE7122A-5AA7-4ECD-B024-E27C9D0CFB7B"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_2140:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "976901BF-C52C-4F81-956A-711AF8A60140"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4110:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A0CBC7F5-7767-43B6-9384-BE143FCDBD7F"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4112:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "957D64EB-D60E-4775-B9A8-B21CA48ED3B1"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4115:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A694AD51-9008-4AE6-8240-98B17AB527EE"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4120:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "38AE6DC0-2B03-4D36-9856-42530312CC46"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4125:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "71DCEF22-ED20-4330-8502-EC2DD4C9838F"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4140:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3DB2822B-B752-4CD9-A178-934957E306B4"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4145:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "81F4868A-6D62-479C-9C19-F9AABDBB6B24"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_4150:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "65378F3A-777C-4AE2-87FB-1E7402F9EA1B"
                                    },
                                    {
                                        "vulnerable": false,
                                        "criteria": "cpe:2.3:h:cisco:firepower_9300:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "07DAFDDA-718B-4B69-A524-B0CEB80FE960"
                                    }
                                ]
                            },
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.2.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "82C8AD48-0130-4C20-ADEC-697668E2293B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.3.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4E75EF7C-8D71-4D70-91F0-74FC99A90CC3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.4.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2DB7EE7D-8CB4-4804-9F9D-F235608E86E1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.5.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "77571973-2A94-4E15-AC5B-155679C3C565"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.6.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CA405A50-3F31-48ED-9AF1-4B02F5B367DE"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:6.7.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D3753953-04E8-4382-A6EC-CD334DD83CF4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:7.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B4A5F89F-1296-4A0F-A36D-082A481F190F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:o:cisco:fxos:7.1.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F50F48AF-44FF-425C-9685-E386F956C901"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:automated_subsea_tuning:02.01.00:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A4D28E76-56D4-4C9A-A660-7CD7E0A1AC9F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:broadworks:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CD975A0E-00A6-475E-9064-1D64E4291499"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite:4.10\\(0.15\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2E50AC21-DA54-4BC8-A503-1935FD1714C7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite:5.3\\(0\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4D05E169-4AF1-4127-A917-056EC2CE781B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite:5.4\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "8AD415A2-422E-4F15-A177-C3696FEAFF0C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite:5.5\\(0\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "134443B7-7BA8-4B50-8874-D4BF931BECFD"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cloudcenter_suite:5.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "73ADF6EA-CD29-4835-8D72-84241D513AFF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(000.000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "BAC1A386-04C7-45B2-A883-1CD9AB60C14B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(000.001\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3F0F1639-D69E-473A-8926-827CCF73ACC9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(000.002\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F4FDF900-E9D6-454A-BF6B-821620CA59F4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(001.000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1859BD43-BA2B-45A5-B523-C6BFD34C7B01"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(001.001\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1EBC145C-9A2F-4B76-953E-0F690314511C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.009\\(001.002\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "158B7A53-FEC1-4B42-A1E2-E83E99564B07"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:common_services_platform_collector:002.010\\(000.000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3A378971-1A08-4914-B012-8E24DCDEFC68"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:006.004.000.003:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4E5CC012-DC85-481A-B82A-9323C19674DA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:006.005.000.:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "76CF59ED-685D-46CD-80A2-AEDA4F03FE53"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:006.005.000.000:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "960B07C0-E205-47E7-B578-46A0AF559D04"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.000.001:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A1A194E1-405E-47FA-8CDF-58EB78883ACC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.001.000:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2E628231-61FB-40AF-A20B-00F5CB78E63B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.002.000:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2EA25E92-2C76-4722-BA06-53F33C0D961C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:7.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "51D2940A-0D03-415B-B72E-1F6862DDAC41"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.003.000:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "8B346ADC-00BE-4409-B658-A11351D2A7D4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.003.001.001:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "5A0E44A9-C427-493B-868A-8A8DA405E759"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:007.003.003:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B2B31E7C-0EB3-4996-8859-DF94A3EE20B3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:008.000.000:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3EAB3E03-275F-4942-9396-FC7A22F42C8D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:connected_analytics_for_network_deployment:008.000.000.000.004:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "19DAD751-D170-4914-BAB2-6054DFEEF404"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_automation:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2F429F37-3576-4D8A-9901-359D65EC3CF4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_automation:2.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F526DEF1-4A3E-4FE1-8153-E9252DAE5B92"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_automation:3.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "C19679D0-F4DC-4130-AFFD-692E5130531A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_automation:4.1.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "60D2FBF3-D8AB-41F0-B170-9E56FBF7E2F7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:crosswork_network_automation:4.1.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F60324DD-8450-4B14-A7A1-0D5EA5163580"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cx_cloud_agent:001.012:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "12F6DFD1-273B-4292-A22C-F2BE0DD3FB3F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cyber_vision:4.0.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "13EA024C-97A4-4D33-BC3E-51DB77C51E76"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:cyber_vision_sensor_management_extension:4.0.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "85289E35-C7C2-46D0-9BDC-10648DD2C86F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_center:2.2.2.8:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "17282822-C082-4FBC-B46D-468DCF8EF6B8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_spaces:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F5463DA6-5D44-4C32-B46C-E8A2ADD7646B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:dna_spaces_connector:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "54A237CF-A439-4114-AF81-D75582F29573"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:emergency_responder:11.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A37D19BF-E4F5-4AF4-8942-0C3B62C4BF2B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:emergency_responder:11.5\\(4.65000.14\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EF25688B-6659-4C7C-866D-79AA1166AD7A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:emergency_responder:11.5\\(4.66000.14\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "47B70741-90D9-4676-BF16-8A21E147F532"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:enterprise_chat_and_email:12.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "ED862A1B-E558-4D44-839C-270488E735BB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:enterprise_chat_and_email:12.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2678AF98-1194-4810-9933-5BA50E409F88"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:enterprise_chat_and_email:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "37E7DEBD-9E47-4D08-86BC-D1B013450A98"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:3.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1A935862-18F7-45FE-B647-1A9BA454E304"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:3.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "69594997-2568-4C10-A411-69A50BFD175F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:4.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1EC39E2D-C47B-4311-BC7B-130D432549F4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:4.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EE5E6CBE-D82C-4001-87CB-73DF526F0AB1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:5.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "460E6456-0E51-45BC-868E-DEEA5E3CD366"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:evolved_programmable_network_manager:5.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F7F58659-A318-42A0-83C5-8F09FCD78982"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.5\\(1\\):su1:*:*:*:*:*:*",
                                        "matchCriteriaId": "D8A49E46-8501-4697-A17A-249A7D9F5A0B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.5\\(1\\):su2:*:*:*:*:*:*",
                                        "matchCriteriaId": "5D81E7A9-0C2B-4603-91F0-ABF2380DBBA3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.6\\(1\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "4DFCE723-9359-40C7-BA35-B71BDF8E3CF3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.6\\(1\\):es01:*:*:*:*:*:*",
                                        "matchCriteriaId": "28B1524E-FDCA-4570-86DD-CE396271B232"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.6\\(1\\):es02:*:*:*:*:*:*",
                                        "matchCriteriaId": "74DC6F28-BFEF-4D89-93D5-10072DAC39C8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:finesse:12.6\\(1\\):es03:*:*:*:*:*:*",
                                        "matchCriteriaId": "BA1D60D7-1B4A-4EEE-A26C-389D9271E005"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.2.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1D726F07-06F1-4B0A-B010-E607E0C2A280"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.3.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3ED58B0E-FCC7-48E3-A5C0-6CC54A38BAE3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.4.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B2DF0B07-8C2A-4341-8AFF-DE7E5E5B3A43"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.5.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "41E168ED-D664-4749-805E-77644407EAFE"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.6.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DCD69468-8067-4A5D-B2B0-EC510D889AA0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:6.7.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "85F22403-B4EE-4303-9C94-915D3E0AC944"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:7.0.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "BBCA75A6-0A3E-4393-8884-9F3CE190641E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:firepower_threat_defense:7.1.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D619BF54-1BA9-45D0-A876-92D7010088A0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:002.004\\(000.914\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "808F8065-BD3A-4802-83F9-CE132EDB8D34"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:002.006\\(000.156\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "B236B13E-93B9-424E-926C-95D3DBC6CA5D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:002.007\\(000.356\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "8A63CC83-0A6E-4F33-A1BE-214A33B51518"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:003.000\\(000.458\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "37DB7759-6529-46DE-B384-10F060D86A97"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:003.001\\(000.518\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "8C640AD9-146E-488A-B166-A6BB940F97D3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:identity_services_engine:003.002\\(000.116\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "DAC1FA7E-CB1B-46E5-A248-ABACECFBD6E8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:integrated_management_controller_supervisor:002.003\\(002.000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7C3BD5AF-9FC1-494B-A676-CC3D4B8EAC8D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:integrated_management_controller_supervisor:2.3.2.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F477CACA-2AA0-417C-830D-F2D3AE93153A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:intersight_virtual_appliance:1.0.9-343:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7E3BE5E1-A6B6-46C7-B93B-8A9F5AEA2731"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:mobility_services_engine:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "04E0BB7B-0716-4DBD-89B9-BA11AAD77C00"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_assurance_engine:6.0\\(2.1912\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "64C98A76-0C31-45E7-882B-35AE0D2C5430"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "379F8D86-BE87-4250-9E85-494D331A0398"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.1\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "71F69E51-E59D-4AE3-B242-D6D2CFDB3F46"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.2\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "578DA613-8E15-4748-A4B7-646415449609"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.3\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "544EFAD6-CE2F-4E1D-9A00-043454B72889"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.4\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2E16DF9C-3B64-4220-82B6-6E20C7807BAA"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B9CD5B8A-9846-48F1-9495-77081E44CBFC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.5\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "68E6CD49-6F71-4E17-B046-FBE91CE91CB7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_dashboard_fabric_controller:11.5\\(3\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "0BDD8018-7E77-4C89-917E-ACDC678A7DE2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_insights_for_data_center:6.0\\(2.1914\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A7D39156-A47D-405E-8C02-CAE7D637F99A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:network_services_orchestrator:-:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "5426FC59-411D-4963-AFEF-5B55F68B8958"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:optical_network_controller:1.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "810E9A92-4302-4396-94D3-3003947DB2A7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:8.3\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "522C36A5-7520-4368-BD92-9AB577756493"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:8.4\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CB2EC4BE-FFAF-4605-8A96-2FEF35975540"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:8.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CA1D3C2A-E5FA-400C-AC01-27A3E5160477"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:9.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "63B27050-997B-4D54-8E5A-CE9E33904318"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:9.0\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "5ABF05B8-1B8A-4CCF-A1AD-D8602A247718"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:9.1\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2F74580D-0011-4ED9-9A00-B4CDB6685154"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:12.5\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "17A3C22E-1980-49B6-8985-9FA76A77A836"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:paging_server:14.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B1AB42DC-CE58-448A-A6B5-56F31B15F4A0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:prime_service_catalog:12.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9DC32B55-0C76-4669-8EAD-DCC16355E887"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6CDA737F-337E-4C30-B68D-EF908A8D6840"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.4:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9DC5A89C-CCCF-49EC-B4FC-AB98ACB79233"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4BA4F513-CBA1-4523-978B-D498CEDAE0CF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6C53C6FD-B98E-4F7E-BA4D-391C90CF9E83"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.6.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D00F6719-2C73-4D8D-8505-B9922E8A4627"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.7:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EFE9210F-39C5-4828-9608-6905C1D378D4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:sd-wan_vmanage:20.8:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A1CEDCE4-CFD1-434B-B157-D63329CBA24A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:3.1.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "33660EB8-2984-4258-B8AD-141B7065C85E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:3.1.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "0ACA346D-5103-47F0-8BD9-7A8AD9B92E98"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:3.1.4:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A38BDF03-23C8-4BB6-A44D-68818962E7CB"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:3.1.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3104C099-FEDA-466B-93CC-D55F058F7CD3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:3.2.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "890EA1C7-5990-4C71-857F-197E6F5B4089"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:smart_phy:21.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "56F21CF4-83FE-4529-9871-0FDD70D3095E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B9331834-9EAD-46A1-9BD4-F4027E49D0C3"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1a\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "0E707E44-12CD-46C3-9124-639D0265432E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1b\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2FEE8482-DB64-4421-B646-9E5F560D1712"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1c\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4385CE6E-6283-4621-BBD9-8E66E2A34843"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1d\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9A6CDBD4-889B-442D-B272-C8E9A1B6AEC0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1e\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "FF1E59F9-CF4F-4EFB-872C-5F503A04CCF4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1f\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1782219F-0C3D-45B7-80C7-D1DAA70D90B1"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1g\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DDAB3BAD-1EC6-4101-A58D-42DA48D04D0C"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1h\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "8F7AA674-6BC2-490F-8D8A-F575B11F4BE0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1k\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6945C4DE-C070-453E-B641-2F5B9CFA3B6D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:ucs_central_software:2.0\\(1l\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "DAB8C7C0-D09B-4232-A88E-57D25AF45457"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1.17900.52\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "ACEDB7B4-EBD4-4A37-9EE3-07EE3B46BE44"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1.18119.2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "820D579C-AA45-4DC1-945A-748FFCD51CA2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1.18900.97\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7B23A9A6-CD04-4D76-BE3F-AFAFBB525F5E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1.21900.40\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "A44E6007-7A3A-4AD3-9A65-246C59B73FB6"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager:11.5\\(1.22900.28\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3D508E51-4075-4E34-BB7C-65AF9D56B49F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager_im_\\&_presence_service:11.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "376D06D5-D68E-4FF0-97E5-CBA2165A05CF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_communications_manager_im_\\&_presence_service:11.5\\(1.22900.6\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "18ED6B8F-2064-4BBA-A78D-4408F13C724D"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_computing_system:006.008\\(001.000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "94091FE3-AB88-4CF5-8C4C-77B349E716A9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:11.6\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "91D62A73-21B5-4D16-A07A-69AED2D40CC0"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:12.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "53F1314A-9A2C-43DC-8203-E4654EF013CC"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:12.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "0ADE468B-8F0C-490D-BB4C-358D947BA8E4"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "32FEE78D-309E-491D-9AB6-98005F1CBF49"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_enterprise:12.6\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "878D9901-675D-4444-B094-0BA505E7433F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_express:12.5\\(1\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "66E25EE4-AB7B-42BF-A703-0C2E83E83577"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_express:12.5\\(1\\):su1:*:*:*:*:*:*",
                                        "matchCriteriaId": "D8F35520-F04A-4863-A1BC-0EDD2D1804F7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_express:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EF9855FD-7747-4D9E-9542-703B1EC9A382"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_express:12.6\\(2\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "E07AF386-D8A5-44F5-A418-940C9F88A36A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_contact_center_management_portal:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "113C77DA-AC22-4D67-9812-8510EFC0A95F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:11.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "4BE221AB-A3B0-4CFF-9BC0-777773C2EF63"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:12.0\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "15941265-1E7E-4C3E-AF1D-027C5E0D3141"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:12.5\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "54AA2B0C-92A1-4B53-88D7-6E31120F5041"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_customer_voice_portal:12.6\\(1\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F9BD7207-85FB-4484-8720-4D11F296AC10"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_intelligence_center:12.6\\(1\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "62E009C4-BE3E-4A14-91EF-8F667B2220A7"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_intelligence_center:12.6\\(1\\):es01:*:*:*:*:*:*",
                                        "matchCriteriaId": "088512E1-434D-4685-992E-192A98ECAD9A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_intelligence_center:12.6\\(1\\):es02:*:*:*:*:*:*",
                                        "matchCriteriaId": "50A7BBC6-077C-4182-AA7A-577C4AAC3CD8"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_intelligence_center:12.6\\(2\\):-:*:*:*:*:*:*",
                                        "matchCriteriaId": "E0536F45-3A49-4F93-942E-AF679DFC7017"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_sip_proxy:010.000\\(000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "3D54794B-6CD5-46D7-B9E9-62A642143562"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_sip_proxy:010.000\\(001\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "BE844DCA-FF52-43F5-BDD9-836A812A8CFF"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_sip_proxy:010.002\\(000\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "07B261EB-CA63-4796-BD15-A6770FD68B34"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_sip_proxy:010.002\\(001\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "29F9067A-B86C-4A6B-ACB7-DB125E04B795"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unified_workforce_optimization:11.5\\(1\\):sr7:*:*:*:*:*:*",
                                        "matchCriteriaId": "FAC4CC92-8BA0-4D96-9C48-5E311CDED53F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unity_connection:11.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "8F2437A5-217A-4CD1-9B72-A31BDDC81F42"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:unity_connection:11.5\\(1.10000.6\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "9C3CFF0D-BD70-4353-AE2F-6C55F8DE56A2"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:video_surveillance_manager:7.14\\(1.26\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "2CE47760-0E71-4FCA-97D1-CF0BB71CAC17"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:video_surveillance_manager:7.14\\(2.26\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "89B2D4F5-CB86-4B25-8C14-CED59E8A3F22"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:video_surveillance_manager:7.14\\(3.025\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B150B636-6267-4504-940F-DC37ABEFB082"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:video_surveillance_manager:7.14\\(4.018\\):*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D00B9911-A7CA-467E-B7A3-3AF31828D5D9"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:virtual_topology_system:2.6.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "B67C08C3-412F-4B7F-B98C-EEAEE77CBE4B"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.1.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "6D428C9B-53E1-4D26-BB4D-57FDE02FA613"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.2.1:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "CDB41596-FACF-440A-BB6C-8CAD792EC186"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.2.2:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "D8C88EE2-5702-4E8B-A144-CB485435FD62"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.2.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "1BC62844-C608-4DB1-A1AD-C1B55128C560"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.3:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EFF2FFA4-358A-4F33-BC67-A9EF8A30714E"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.4:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "53C0BBDE-795E-4754-BB96-4D6D4B5A804F"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.5:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "7A41E377-16F9-423F-8DC2-F6EDD54E1069"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:wan_automation_engine:7.6:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F0C2789E-255B-45D9-9469-B5B549A01F53"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:3.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "EFAFEC61-2128-4BFA-992D-54742BD4911A"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:cisco:webex_meetings_server:4.0:*:*:*:*:*:*:*",
                                        "matchCriteriaId": "F12AF70E-2201-4F5D-A929-A1A057B74252"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:snowsoftware:snow_commander:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "8.10.0",
                                        "matchCriteriaId": "A2CBCDC4-02DF-47F4-A01C-7CBCB2FF0163"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:snowsoftware:vm_access_proxy:*:*:*:*:*:*:*:*",
                                        "versionEndExcluding": "3.6",
                                        "matchCriteriaId": "C42D44C8-9894-4183-969B-B38FDA1FEDF9"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:bentley:synchro:*:*:*:*:pro:*:*:*",
                                        "versionStartIncluding": "6.1",
                                        "versionEndExcluding": "6.4.3.2",
                                        "matchCriteriaId": "8CD3B3D3-CC14-4278-9914-F7C6E86D3119"
                                    },
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:bentley:synchro_4d:*:*:*:*:pro:*:*:*",
                                        "versionEndExcluding": "6.2.4.2",
                                        "matchCriteriaId": "0C5D6BF7-A818-4C7D-A305-91EB622271AC"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "nodes": [
                            {
                                "operator": "OR",
                                "negate": false,
                                "cpeMatch": [
                                    {
                                        "vulnerable": true,
                                        "criteria": "cpe:2.3:a:percussion:rhythmyx:*:*:*:*:*:*:*:*",
                                        "versionEndIncluding": "7.3.2",
                                        "matchCriteriaId": "16E0A04D-30BE-4AB3-85A1-13AF614C425C"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "references": [
                    {
                        "url": "http://packetstormsecurity.com/files/165225/Apache-Log4j2-2.14.1-Remote-Code-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165260/VMware-Security-Advisory-2021-0028.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165261/Apache-Log4j2-2.14.1-Information-Disclosure.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165270/Apache-Log4j2-2.14.1-Remote-Code-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165281/Log4j2-Log4Shell-Regexes.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165282/Log4j-Payload-Generator.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165306/L4sh-Log4j-Remote-Code-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165307/Log4j-Remote-Code-Execution-Word-Bypassing.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165311/log4j-scan-Extensive-Scanner.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165371/VMware-Security-Advisory-2021-0028.4.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165532/Log4Shell-HTTP-Header-Injection.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165642/VMware-vCenter-Server-Unauthenticated-Log4Shell-JNDI-Injection-Remote-Code-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/165673/UniFi-Network-Application-Unauthenticated-Log4Shell-Remote-Code-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/167794/Open-Xchange-App-Suite-7.10.x-Cross-Site-Scripting-Command-Injection.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/167917/MobileIron-Log4Shell-Remote-Command-Execution.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory",
                            "VDB Entry"
                        ]
                    },
                    {
                        "url": "http://packetstormsecurity.com/files/171626/AD-Manager-Plus-7122-Remote-Code-Execution.html",
                        "source": "security@apache.org"
                    },
                    {
                        "url": "http://seclists.org/fulldisclosure/2022/Dec/2",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://seclists.org/fulldisclosure/2022/Jul/11",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://seclists.org/fulldisclosure/2022/Mar/23",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/10/1",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Mitigation",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/10/2",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Mitigation",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/10/3",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/13/1",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/13/2",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/14/4",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2021/12/15/3",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://cert-portal.siemens.com/productcert/pdf/ssa-397453.pdf",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://cert-portal.siemens.com/productcert/pdf/ssa-479842.pdf",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://cert-portal.siemens.com/productcert/pdf/ssa-661247.pdf",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://cert-portal.siemens.com/productcert/pdf/ssa-714170.pdf",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://github.com/cisagov/log4j-affected-db",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://github.com/cisagov/log4j-affected-db/blob/develop/SOFTWARE-LIST.md",
                        "source": "security@apache.org",
                        "tags": [
                            "Product",
                            "US Government Resource"
                        ]
                    },
                    {
                        "url": "https://github.com/nu11secur1ty/CVE-mitre/tree/main/CVE-2021-44228",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://lists.debian.org/debian-lts-announce/2021/12/msg00007.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Mailing List",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://lists.fedoraproject.org/archives/list/package-announce%40lists.fedoraproject.org/message/M5CSVUNV4HWZZXGOKNSK6L7RPM7BOKIB/",
                        "source": "security@apache.org"
                    },
                    {
                        "url": "https://lists.fedoraproject.org/archives/list/package-announce%40lists.fedoraproject.org/message/VU57UJDCFIASIO35GC55JMKSRXJMCDFM/",
                        "source": "security@apache.org"
                    },
                    {
                        "url": "https://logging.apache.org/log4j/2.x/security.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Release Notes",
                            "Vendor Advisory"
                        ]
                    },
                    {
                        "url": "https://msrc-blog.microsoft.com/2021/12/11/microsofts-response-to-cve-2021-44228-apache-log4j2/",
                        "source": "security@apache.org",
                        "tags": [
                            "Patch",
                            "Third Party Advisory",
                            "Vendor Advisory"
                        ]
                    },
                    {
                        "url": "https://psirt.global.sonicwall.com/vuln-detail/SNWLID-2021-0032",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://security.netapp.com/advisory/ntap-20211210-0007/",
                        "source": "security@apache.org",
                        "tags": [
                            "Vendor Advisory"
                        ]
                    },
                    {
                        "url": "https://support.apple.com/kb/HT213189",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-apache-log4j-qRuKNEbd",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-apache-log4j-qRuKNEbd",
                        "source": "nvd@nist.gov",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://twitter.com/kurtseifried/status/1469345530182455296",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.bentley.com/en/common-vulnerability-exposure/be-2022-0001",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.debian.org/security/2021/dsa-5020",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.intel.com/content/www/us/en/security-center/advisory/intel-sa-00646.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.kb.cert.org/vuls/id/930724",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory",
                            "US Government Resource"
                        ]
                    },
                    {
                        "url": "https://www.nu11secur1ty.com/2021/12/cve-2021-44228.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Exploit",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.oracle.com/security-alerts/alert-cve-2021-44228.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.oracle.com/security-alerts/cpuapr2022.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Patch",
                            "Third Party Advisory"
                        ]
                    },
                    {
                        "url": "https://www.oracle.com/security-alerts/cpujan2022.html",
                        "source": "security@apache.org",
                        "tags": [
                            "Patch",
                            "Third Party Advisory"
                        ]
                    }
                ]
            }
        }
    ]
}