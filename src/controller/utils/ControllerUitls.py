import re

cvwelibapi = "http://127.0.0.1:8080/api/"


# Regex utils
__cve_regex = r"^(CVE-)\d{4}(-)\d{5}$"
__cwe_regex = r"^(CWE-)\d*$"


def check_cve(cve_id: str) -> bool:
    return True if re.match(__cve_regex, cve_id) else False


def check_cwe(cwe_id: str) -> bool:
    return True if re.match(__cwe_regex, cwe_id) else False
