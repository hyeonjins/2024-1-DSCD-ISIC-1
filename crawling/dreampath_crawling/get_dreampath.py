from bs4 import BeautifulSoup
import time
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

from dotenv import load_dotenv
import os
import re

from processing import crawling_to_df

# .env 파일 로드
dotenv_path = os.path.join(os.path.dirname(__file__), '../.env')
# dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

company_list = []
spec_list = []
resume_list = []

# Chrome WebDriver 경로 설정
url = "https://ddp.dongguk.edu/login.jsp"

#Selenium WebDriver로 Chrome 실행
driver = webdriver.Chrome()
driver.get(url)

# # .env 파일에 chromedrive 경로 설정
# driver_path = os.getenv('CHROME_DRIVER_PATH')
# driver = webdriver.Chrome(driver_path)



# 로그인 정보
# .env파일 만들어서 학번이랑 비번 입력해주세요!
username = os.getenv('DONGDUK_USERNAME')
password = os.getenv('DONGDUK_PASSWORD')
print("Username:", os.getenv('DONGDUK_USERNAME'))
print("Password:", os.getenv('DONGDUK_PASSWORD'))


# 아이디 입력란에 입력 후 엔터
username_input = driver.find_element(By.XPATH, '//*[@id="userid"]')
username_input.send_keys(username)


# 비밀번호 입력란에 입력 후 엔터
password_input = driver.find_element(By.XPATH, '//*[@id="userpw"]')
password_input.send_keys(password)

# 로그인 버튼 클릭

login_button = driver.find_element(By.XPATH, '//*[@id="login1"]/div[1]/a')
login_button.click()

# 로그인 확인을 위해 2초 대기
time.sleep(1)


career_button = driver.find_element(By.XPATH, '//*[@id="m_container"]/div[4]/div/div[2]/div/ul/li/a')
career_button.click()

it_button = driver.find_element(By.XPATH, '//*[@id="ind_div"]/li[6]/a')
it_button.click()

search_button = driver.find_element(By.XPATH, '//*[@id="searchForm"]/fieldset/button')
search_button.click()

for page in range(1, 50):
    print(page)
    for i in range(1, 11):
        # 각 tr 요소의 Xpath를 동적으로 생성
        xpath = '//*[@id="GuestBookForm"]/table/tbody/tr[' + str(i) + ']/td[1]/a'
        
        # Xpath를 이용하여 요소 찾기
        company_button = driver.find_element(By.XPATH, xpath)
        company_button.click()
        driver.switch_to.window(driver.window_handles[1])
        try:
            WebDriverWait(driver, 10).until(EC.alert_is_present())
            alert = driver.switch_to.alert
            # 경고창의 메시지를 확인
            if "존재하지 않는 데이터입니다. 코드를 확인해 주십시오!" in alert.text:
                alert.accept()  # 경고창 닫기
                driver.close()  # 현재 창 닫기
                driver.switch_to.window(driver.window_handles[0])  # 메인 윈도우로 전환
                continue  # 다음 company_button으로 이동
            else:
                alert.accept()  # 다른 경고의 경우 단순히 경고창 닫기
        except TimeoutException:
            # BeautifulSoup 객체 생성
            page_source = driver.page_source
            soup = BeautifulSoup(page_source, 'html.parser')

        # ul 요소 선택
            ul_element = soup.select_one('#pright > div > div:nth-of-type(2) > div:nth-of-type(1) > ul')
            company_names = soup.h1.text

            pattern = r'(?<=\b)[^\d]+(?=\s합격자 자기소개서)'

            company_names = re.findall(pattern, company_names)

            company_list.append(company_names)
            inner_elements = ul_element.find_all()

        # 추출한 하위 요소 출력
            specs = []
            resume = []
            for element in inner_elements:
                specs.append(element.text)
            spec_list.append(specs)
            
     
            div_elements = soup.find_all('div')

            # 선택된 <div> 요소들 중에서 style 속성이 "line-height:22px;" 인 요소들을 추출 -> 자소서 부분.
            common_elements = [div for div in div_elements if div.get('style') == 'line-height:22px;']

            for element in common_elements:
                try:
                    if element:
                        resume_list.append(element.text)
                        print(element.text)
                except Exception as e:
                    driver.close()
                    break
       
            driver.close()
            
        finally:
            time.sleep(1)   
            driver.switch_to.window(driver.window_handles[0])
    if (page + 3) % 10 == 0:
        page_path = '//*[@id="container"]/ul[2]/li[10]/a'
    else:
        page_path = '//*[@id="container"]/ul[2]/li[' + str((page + 3) % 10) + ']/a'

    page_button = driver.find_element(By.XPATH, page_path)
    page_button.click()    

# print(company_list)
# print(spec_list)
print(company_list)
print(spec_list)
print(resume_list)

time.sleep(5)

# WebDriver 종료
# crawling_df = crawling_to_df(spec_list,company_list)
# crawling_df.to_excel('output_page_50.xlsx', index=False)
driver.quit()


# 회사도 있으면 가져오고 없으면 pass
# /html/body/div[5]/div[9]/div[2]/div[1]/section[1]/div/div[2]/a

# 프로젝트 있으면 가져오고 없으면 pass
# //*[@id="people-project-item-403616"]/div/div[2]/div[2]/strong

# 자격증도 있으면 가져오고 없으면 pass